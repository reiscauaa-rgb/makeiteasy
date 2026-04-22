'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { getPostBySlug, getRelatedPosts, urlFor, estimateReadTime } from '@/lib/sanity';
import type { Post } from '@/lib/sanity';

// ── Placeholder for the "not yet configured" state ──
const PLACEHOLDER_POST: Post = {
    _id: 'placeholder',
    title: 'Entenda o CPT: tudo o que você precisa saber para trabalhar legalmente nos EUA como estudante',
    slug: { current: 'entenda-o-cpt' },
    publishedAt: '2024-02-20T00:00:00Z',
    category: 'CPT AND OPT',
    excerpt: 'O CPT (Curricular Practical Training) permite trabalhar nos EUA enquanto estuda. Saiba como funciona.',
    mainImage: null as any,
    author: { name: 'Giovanna' },
    body: [
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Este é um artigo de exemplo. Configure o Sanity.io para exibir o conteúdo real dos seus posts.' }],
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'O que é o CPT?' }],
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'O Curricular Practical Training (CPT) é uma autorização de trabalho temporária que permite a estudantes internacionais com visto F-1 trabalhar fora do campus de forma legal, desde que essa atividade esteja vinculada ao seu currículo acadêmico.' }],
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Quem pode solicitar o CPT?' }],
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Para solicitar o CPT, é necessário estar matriculado como estudante full-time em uma instituição americana certificada pelo SEVP, completado pelo menos um ano acadêmico nos EUA com visto F-1.' }],
        },
        {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: 'Benefícios do CPT' }],
        },
        {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: 'Além de permitir que você trabalhe legalmente, o CPT oferece vantagens concretas: você adquire experiência profissional nos EUA, fortalece seu currículo e cria networking na sua área.' }],
        },
    ],
};

function formatDate(dateStr: string) {
    try {
        return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(dateStr));
    } catch {
        return dateStr;
    }
}

// ── Portable Text components ──
const ptComponents = {
    block: {
        normal: ({ children }: any) => <p className={styles.ptP}>{children}</p>,
        h2: ({ children }: any) => <h2 className={styles.ptH2}>{children}</h2>,
        h3: ({ children }: any) => <h3 className={styles.ptH3}>{children}</h3>,
        h4: ({ children }: any) => <h4 className={styles.ptH4}>{children}</h4>,
        blockquote: ({ children }: any) => <blockquote className={styles.ptQuote}>{children}</blockquote>,
    },
    marks: {
        strong: ({ children }: any) => <strong className={styles.ptStrong}>{children}</strong>,
        em: ({ children }: any) => <em>{children}</em>,
        link: ({ value, children }: any) => (
            <a href={value?.href} target="_blank" rel="noopener noreferrer" className={styles.ptLink}>
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }: any) => (
            <figure className={styles.ptFigure}>
                <Image
                    src={urlFor(value).width(900).url()}
                    alt={value.alt || ''}
                    width={900}
                    height={500}
                    className={styles.ptImage}
                />
                {value.alt && <figcaption className={styles.ptCaption}>{value.alt}</figcaption>}
            </figure>
        ),
    },
};

function RelatedCard({ post }: { post: Post }) {
    return (
        <Link href={`/blog/${post.slug.current}`} className={styles.relatedCard}>
            <div className={styles.relatedImg}>
                {post.mainImage ? (
                    <Image
                        src={urlFor(post.mainImage).width(400).height(250).url()}
                        alt={(post.mainImage as any)?.alt || post.title}
                        fill
                        className={styles.relatedImgEl}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className={styles.relatedImgPlaceholder}>📰</div>
                )}
            </div>
            <div className={styles.relatedBody}>
                {post.category && <span className={styles.relatedBadge}>{post.category}</span>}
                <p className={styles.relatedTitle}>{post.title}</p>
            </div>
        </Link>
    );
}

export default function BlogPostPage() {
    const params = useParams();
    const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : '';

    const [post, setPost] = useState<Post | null>(null);
    const [related, setRelated] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                const fetched = await getPostBySlug(slug);
                if (fetched) {
                    setPost(fetched);
                    if (fetched.category) {
                        const rel = await getRelatedPosts(fetched.category, fetched._id);
                        setRelated(rel);
                    }
                } else {
                    // Sanity not configured — show placeholder for matching slugs
                    if (slug === PLACEHOLDER_POST.slug.current) {
                        setPost(PLACEHOLDER_POST);
                    } else {
                        setNotFound(true);
                    }
                }
            } catch {
                if (slug === PLACEHOLDER_POST.slug.current) {
                    setPost(PLACEHOLDER_POST);
                } else {
                    setNotFound(true);
                }
            } finally {
                setIsLoading(false);
            }
        }
        if (slug) load();
    }, [slug]);

    if (isLoading) {
        return (
            <main>
                <div className={styles.loadingHero} />
                <div className={styles.loadingBody}>
                    <div className={styles.skeleton} style={{ height: '2rem', width: '60%' }} />
                    <div className={styles.skeleton} />
                    <div className={styles.skeleton} />
                    <div className={styles.skeleton} style={{ width: '80%' }} />
                </div>
            </main>
        );
    }

    if (notFound || !post) {
        return (
            <main>
                <div className={styles.notFoundWrap}>
                    <span className={styles.notFoundEmoji}>😕</span>
                    <h1 className={styles.notFoundTitle}>Artigo não encontrado</h1>
                    <p className={styles.notFoundText}>O artigo que você procura não existe ou foi removido.</p>
                    <Link href="/blog" className={styles.backBtn}>← Voltar ao Blog</Link>
                </div>
            </main>
        );
    }

    const readTime = post.body ? estimateReadTime(post.body as any[]) : 3;

    return (
        <main>
            {/* ════ HERO ════ */}
            <section className={styles.hero}>
                <Image
                    src="/images/hero sobre.avif"
                    alt=""
                    fill
                    className={styles.heroBgImg}
                    priority
                />
                <div className={styles.heroInner}>
                    <Link href="/blog" className={styles.backLink}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Voltar ao Blog
                    </Link>

                    {post.category && <span className={styles.heroBadge}>{post.category}</span>}
                    <h1 className={styles.heroTitle}>{post.title}</h1>

                    <div className={styles.heroMeta}>
                        {post.author?.name && (
                            <span className={styles.metaAuthor}>
                                <span className={styles.metaAvatar}>{post.author.name[0]}</span>
                                {post.author.name}
                            </span>
                        )}
                        <span className={styles.metaDot} aria-hidden="true" />
                        <span>{formatDate(post.publishedAt)}</span>
                        <span className={styles.metaDot} aria-hidden="true" />
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
                                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                            </svg>
                            {readTime} min read
                        </span>
                    </div>
                </div>
            </section>

            {/* ════ MAIN IMAGE ════ */}
            {post.mainImage && (
                <div className={styles.mainImageWrap}>
                    <Image
                        src={urlFor(post.mainImage).width(1200).height(600).url()}
                        alt={(post.mainImage as any)?.alt || post.title}
                        width={1200}
                        height={600}
                        className={styles.mainImage}
                        priority
                    />
                </div>
            )}

            {/* ════ CONTENT ════ */}
            <div className={styles.contentWrap}>
                <article className={styles.article}>
                    {post.excerpt && (
                        <p className={styles.articleExcerpt}>{post.excerpt}</p>
                    )}

                    {post.body && Array.isArray(post.body) && (
                        <PortableText value={post.body as any} components={ptComponents} />
                    )}

                    {/* Share / CTA bar */}
                    <div className={styles.sharebar}>
                        <a
                            href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                            target="_blank" rel="noopener noreferrer"
                            className={styles.shareWhatsApp}
                        >
                            Tire sua dúvida no WhatsApp
                        </a>
                    </div>
                </article>

                {/* ── Sidebar / sticky CTA ── */}
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarCard}>
                        <h3 className={styles.sidebarTitle}>Quer estudar nos EUA?</h3>
                        <p className={styles.sidebarText}>Assessoria gratuita e em português. A Giovanna te ajuda a encontrar a universidade certa.</p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                            target="_blank" rel="noopener noreferrer"
                            className={styles.sidebarBtn}
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                </aside>
            </div>

            {/* ════ RELATED POSTS ════ */}
            {related.length > 0 && (
                <ScrollReveal variant="fadeUp">
                    <section className={styles.relatedSection}>
                        <div className="container">
                            <h2 className={styles.relatedHeading}>Outros artigos que você pode gostar</h2>
                            <div className={styles.relatedGrid}>
                                {related.map((r) => <RelatedCard key={r._id} post={r} />)}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            )}
        </main>
    );
}
