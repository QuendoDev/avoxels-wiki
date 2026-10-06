// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://quendodev.github.io',
	base: '/avoxels-wiki',
	integrations: [
		starlight({
			title: 'Avoxels Wiki',
			description: 'Official wiki of Avoxels, the Marvel Cinematic Universe and multiverse mod for Minecraft.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/QuendoDev/avoxels-wiki' }],
			editLink: { baseUrl: 'https://github.com/QuendoDev/avoxels-wiki/edit/main/' },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Wiki',
					items: [{ slug: 'about' }],
				},
				{
					label: 'Reference',
					translations: { es: 'Referencia' },
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
