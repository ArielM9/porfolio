import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		demoUrl: z.string().optional(),
		githubUrl: z.string().optional(),
		priority: z.number().default(100),
		img: z.string().optional(),
	}),
});

export const collections = {
	'projects': projectsCollection,
};
