import { sanityClient } from './src/lib/sanity.ts';

async function run() {
    const clientWithoutToken = sanityClient.withConfig({ token: undefined, perspective: 'previewDrafts', useCdn: false });
    
    try {
        const result = await clientWithoutToken.fetch('*[_type=="post" && slug.current=="teste01"][0]');
        console.log("Result:", result ? { id: result._id } : "null");
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();
