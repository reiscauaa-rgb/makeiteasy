/**
 * This route renders the Sanity Studio embedded at /studio
 * It is intentionally excluded from the root layout (no Header/Footer)
 */
import StudioClient from './StudioClient';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
    return <StudioClient />;
}
