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
    const debug = searchParams.get('debug') === 'true';

    if (!slug) {
        return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    // Read token at request time (not module init) to ensure Vercel env vars are available
    const token = process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '9xvppnkj';
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

    // Debug mode: return diagnostic info without exposing full token
    if (debug) {
        return NextResponse.json({
            hasToken: !!token,
            tokenPrefix: token ? token.substring(0, 6) + '...' : null,
            projectId,
            dataset,
            slug,
            envKeys: Object.keys(process.env).filter(k => k.includes('SANITY')),
        });
    }

    if (!token) {
        console.error('[/api/draft] No Sanity API token found. Set SANITY_API_TOKEN in Vercel env vars.');
        return NextResponse.json(
            { error: 'Preview not configured: missing API token', post: null },
            { status: 200 }
        );
    }

    try {
        // Create a fresh client with the token — ensures it works on Vercel serverless
        // Use 'drafts' perspective (the 'previewDrafts' name is deprecated)
        const previewClient = createClient({
            projectId,
            dataset,
            apiVersion: '2024-01-01',
            useCdn: false,
            token,
            perspective: 'drafts',
        });

        const post = await previewClient.fetch(POST_QUERY, { slug });

        return NextResponse.json({
            post: post ?? null,
            source: post ? 'draft' : 'not_found',
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error('[/api/draft] Error fetching draft:', message);
        return NextResponse.json({ error: message, post: null }, { status: 500 });
    }
}
