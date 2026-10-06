import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Hand-written additions to generated pages. The automation never touches this folder.
	notes: defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }) }),
};
