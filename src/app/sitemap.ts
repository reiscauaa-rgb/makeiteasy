import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://makeiteasyusa.com';

  // Buscar todos os artigos do blog no Sanity
  const posts = await getAllPosts();

  // Criar URLs dinâmicas para os artigos do blog
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Rotas estáticas do site
  const staticPages = ['', '/sobre', '/servicos', '/blog', '/faq', '/contato', '/privacidade', '/termos'];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.9,
  }));

  // Retornar a combinação das rotas estáticas com os artigos do blog
  return [...staticEntries, ...postEntries];
}
