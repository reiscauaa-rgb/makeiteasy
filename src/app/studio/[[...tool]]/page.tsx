/**
 * This route renders the Sanity Studio embedded at /studio
 * It is intentionally excluded from the root layout (no Header/Footer)
 */
import dynamic from 'next/dynamic';
import config from '../../../../sanity.config';

const NextStudioNoSSR = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
);

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
    return <NextStudioNoSSR config={config} />;
}
