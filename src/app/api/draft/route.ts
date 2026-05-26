import { NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/sanity';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
    }

    try {
        const post = await getPostBySlug(slug, true);
        return NextResponse.json({ post });
    } catch (error) {
        console.error('Error fetching draft:', error);
        return NextResponse.json({ error: 'Failed to fetch draft' }, { status: 500 });
    }
}
