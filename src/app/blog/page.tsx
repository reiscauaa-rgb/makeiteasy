'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import { getAllPosts, getCategories, urlFor } from '@/lib/sanity';
import type { Post } from '@/lib/sanity';

// ── Placeholder posts shown while Sanity isn't connected ──
const PLACEHOLDER_POSTS: Post[] = [
    {
        _id: '1',
        title: 'O que é o visto F-1 e como ele funciona?',
        slug: { current: 'o-que-e-visto-f1' },
        publishedAt: '2024-03-10T00:00:00Z',
        category: 'Visto',
        excerpt: 'Entenda tudo sobre o visto de estudante F-1 e como dar o primeiro passo para estudar nos EUA.',
        mainImage: null as any,
        author: { name: 'Giovanna' },
    },
    {
        _id: '2',
        title: 'Entenda o CPT: tudo o que você precisa saber para trabalhar legalmente nos EUA como estudante',
        slug: { current: 'entenda-o-cpt' },
        publishedAt: '2024-02-20T00:00:00Z',
        category: 'CPT AND OPT',
        excerpt: 'O CPT (Curricular Practical Training) permite trabalhar nos EUA enquanto estuda. Saiba como funciona.',
        mainImage: null as any,
        author: { name: 'Giovanna' },
    },
    {
        _id: '3',
        title: 'OPT: entenda como funciona a autorização de trabalho para estudantes internacionais nos EUA',
        slug: { current: 'entenda-o-opt' },
        publishedAt: '2024-02-05T00:00:00Z',
        category: 'CPT AND OPT',
        excerpt: 'O OPT é uma extensão de trabalho após a graduação. Descubra como solicitá-la e quanto tempo dura.',
        mainImage: null as any,
        author: { name: 'Giovanna' },
    },
    {
        _id: '4',
        title: 'OPT Extension: como estender seu OPT por mais 24 meses',
        slug: { current: 'opt-extension' },
        publishedAt: '2024-01-15T00:00:00Z',
        category: 'CPT AND OPT',
        excerpt: 'Alunos de STEM podem estender o OPT por até 24 meses extras. Veja como fazer isso com segurança.',
        mainImage: null as any,
        author: { name: 'Giovanna' },
    },
    {
        _id: '5',
        title: 'Melhores universidades nos EUA para brasileiros com custo acessível',
        slug: { current: 'melhores-universidades-eua' },
        publishedAt: '2024-01-05T00:00:00Z',
        category: 'Universidades',
        excerpt: 'Existem ótimas universidades americanas com mensalidades a partir de $7.000/ano. Conheça as melhores opções.',
        mainImage: null as any,
        author: { name: 'Giovanna' },
    },
    {
        _id: '6',
        title: 'Como abrir conta bancária nos EUA sendo estudante internacional',
        slug: { current: 'abrir-conta-bancaria-eua' },
        publishedAt: '2023-12-20T00:00:00Z',
        category: 'Vida nos EUA',
        excerpt: 'Abrir uma conta bancária nos EUA é essencial para receber seu salário e pagar despesas. Veja o passo a passo.',
        mainImage: null as any,
        author: { name: 'Giovanna' },
    },
];

function formatDate(dateStr: string): string {
    try {
        return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(dateStr));
    } catch {
        return dateStr;
    }
}

function estimateReadTime(post: Post): number {
    return 3;
}

function PostCard({ post }: { post: Post }) {
    const hasImage = post.mainImage;
    return (
        <Link href={`/blog/${post.slug.current}`} className={styles.card}>
            <div className={styles.cardImage}>
                {hasImage ? (
                    <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={(post.mainImage as any)?.alt || post.title}
                        fill
                        className={styles.cardImg}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className={styles.cardImgPlaceholder}>
                        <span className={styles.cardImgIcon}>📰</span>
                    </div>
                )}
                {post.category && (
                    <span className={styles.cardBadge}>{post.category}</span>
                )}
            </div>
            <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                {post.excerpt && <p className={styles.cardExcerpt}>{post.excerpt}</p>}
                <div className={styles.cardMeta}>
                    <span className={styles.cardReadTime}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        {estimateReadTime(post)} min read
                    </span>
                    <span className={styles.cardDate}>{formatDate(post.publishedAt)}</span>
                </div>
            </div>
        </Link>
    );
}

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[]>(PLACEHOLDER_POSTS);
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('Todos');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const [fetchedPosts, fetchedCats] = await Promise.all([getAllPosts(), getCategories()]);
                if (fetchedPosts && fetchedPosts.length > 0) {
                    setPosts(fetchedPosts);
                }
                if (fetchedCats && fetchedCats.length > 0) {
                    setCategories(fetchedCats);
                }
            } catch {
                // Sanity not configured yet — keep placeholder posts
            } finally {
                setIsLoading(false);
            }
        }
        load();
    }, []);

    const visibleCategories = useMemo(() => {
        return Array.from(new Set([...categories, ...PLACEHOLDER_POSTS.map((p) => p.category).filter(Boolean)]));
    }, [categories]);

    const filteredPosts = useMemo(() => {
        return posts.filter((p) => {
            const matchCat = activeCategory === 'Todos' || p.category === activeCategory;
            const matchSearch =
                !search ||
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                (p.excerpt || '').toLowerCase().includes(search.toLowerCase());
            return matchCat && matchSearch;
        });
    }, [posts, activeCategory, search]);

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
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <p className={styles.heroEyebrow}>Make It</p>
                        <h1 className={styles.heroTitle}>Blog</h1>
                        <p className={styles.heroSubtitle}>
                            Dicas, guias e histórias reais para quem quer estudar e crescer nos EUA.
                        </p>
                    </div>
                </div>
            </section>

            {/* ════ FILTERS ════ */}
            <div className={styles.filterBar}>
                <div className="container">
                    <div className={styles.filterInner}>
                        {/* Search */}
                        <div className={styles.searchWrap}>
                            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                id="blog-search"
                                type="text"
                                placeholder="Pesquisar artigos..."
                                className={styles.searchInput}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {search && (
                                <button className={styles.searchClear} onClick={() => setSearch('')} aria-label="Limpar busca">×</button>
                            )}
                        </div>

                        {/* Category Pills */}
                        <div className={styles.pills}>
                            <button
                                className={`${styles.pill} ${activeCategory === 'Todos' ? styles.pillActive : ''}`}
                                onClick={() => setActiveCategory('Todos')}
                            >
                                Todos
                            </button>
                            {visibleCategories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`${styles.pill} ${activeCategory === cat ? styles.pillActive : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ════ POSTS GRID ════ */}
            <section className={styles.postsSection}>
                <div className="container">

                    {/* Results count */}
                    <p className={styles.resultsCount}>
                        {filteredPosts.length === 0
                            ? 'Nenhum artigo encontrado.'
                            : `${filteredPosts.length} artigo${filteredPosts.length !== 1 ? 's' : ''} encontrado${filteredPosts.length !== 1 ? 's' : ''}`}
                    </p>

                    {filteredPosts.length > 0 ? (
                        <div className={styles.grid}>
                            {filteredPosts.map((post, i) => (
                                <ScrollReveal key={post._id} variant="fadeUp" delay={i % 3 * 100}>
                                    <PostCard post={post} />
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <span className={styles.emptyIcon}>🔍</span>
                            <p>Nenhum resultado para <strong>"{search || activeCategory}"</strong></p>
                            <button className={styles.emptyReset} onClick={() => { setSearch(''); setActiveCategory('Todos'); }}>
                                Ver todos os artigos
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ════ BOTTOM CTA ════ */}
            <ScrollReveal variant="fadeUp">
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaCard}>
                            <div className={styles.ctaText}>
                                <h2 className={styles.ctaTitle}>Tem dúvidas sobre estudar nos EUA?</h2>
                                <p className={styles.ctaBody}>Nossa assessoria é gratuita e em português. Fale com a gente agora pelo WhatsApp.</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=12023676174&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaBtn}
                            >
                                Falar no WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </main>
    );
}
