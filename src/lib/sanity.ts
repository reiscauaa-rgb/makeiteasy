import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const isSanityConfigured = Boolean(projectId && /^[a-z0-9-]+$/.test(projectId));

export const config = {
    projectId: isSanityConfigured ? projectId! : 'placeholder',
    dataset,
    apiVersion: '2024-01-01',
    useCdn: process.env.NODE_ENV === 'production',
};

// Only instantiate when valid — prevents runtime crash before .env.local is set
export const sanityClient = isSanityConfigured ? createClient(config) : null;

const builder = isSanityConfigured ? createImageUrlBuilder(config) : null;

export function urlFor(source: SanityImageSource) {
    if (!builder || !source) return { url: () => '' } as any;
    return builder.image(source);
}

// ──────────────────────────────────────────
// GROQ Queries
// ──────────────────────────────────────────

export interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    category: string;
    excerpt: string;
    mainImage: SanityImageSource & { alt?: string };
    author?: { name: string; photo?: SanityImageSource };
    body?: unknown[];
}

/** All posts ordered by date (list page) */
export async function getAllPosts(): Promise<Post[]> {
    if (!sanityClient) return [];
    return sanityClient.fetch(
        `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      category,
      excerpt,
      mainImage,
      author
    }`
    );
}

/** Single post by slug (detail page) */
export async function getPostBySlug(slug: string): Promise<Post | null> {
    if (!sanityClient) return null;
    const result = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      category,
      excerpt,
      mainImage,
      author,
      body
    }`,
        { slug }
    );
    return result ?? null;
}

/** All distinct category values */
export async function getCategories(): Promise<string[]> {
    if (!sanityClient) return [];
    return sanityClient.fetch(
        `array::unique(*[_type == "post" && defined(category)].category) | order(@ asc)`
    );
}

/** Related posts in same category, excluding current */
export async function getRelatedPosts(category: string, excludeId: string): Promise<Post[]> {
    if (!sanityClient) return [];
    return sanityClient.fetch(
        `*[_type == "post" && category == $category && _id != $excludeId] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      publishedAt,
      category,
      excerpt,
      mainImage
    }`,
        { category, excludeId }
    );
}

/** Estimate reading time in minutes from Portable Text body */
export function estimateReadTime(body: unknown[]): number {
    if (!body) return 1;
    const text = body
        .filter((b: any) => b._type === 'block')
        .map((b: any) => b.children?.map((c: any) => c.text).join('') ?? '')
        .join(' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}
