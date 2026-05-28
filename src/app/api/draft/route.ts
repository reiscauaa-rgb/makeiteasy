import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

export const dynamic = 'force-dynamic';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title, titleEn,
  slug,
  publishedAt,
  "category": category->title,
  excerpt, excerptEn,
  mainImage,
  author,
  body, bodyEn
}`;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    // Read token at request time (not module init) to ensure Vercel env vars are available
    const token = process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9xvppnkj';
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

    if (!token) {
        console.error('[/api/draft] No Sanity API token found. Set SANITY_API_TOKEN in Vercel env vars.');
        return NextResponse.json(
            { error: 'Preview not configured: missing API token', post: null },
            { status: 200 }
        );
    }

    try {
        // Create a fresh client with the token — ensures it works on Vercel serverless
        const previewClient = createClient({
            projectId,
            dataset,
            apiVersion: '2024-01-01',
            useCdn: false,
            token,
            perspective: 'previewDrafts',
        });

        const post = await previewClient.fetch(POST_QUERY, { slug });

        if (!post) {
            // Fallback: try without preview perspective (published version)
            const publishedClient = createClient({
                projectId,
                dataset,
                apiVersion: '2024-01-01',
                useCdn: false,
                token,
            });
            const published = await publishedClient.fetch(POST_QUERY, { slug });
            return NextResponse.json({ post: published, source: 'published' });
        }

        return NextResponse.json({ post, source: 'draft' });
    } catch (error) {
        console.error('[/api/draft] Error fetching draft:', error);
        return NextResponse.json({ error: 'Failed to fetch draft', post: null }, { status: 500 });
    }
}
