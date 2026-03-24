import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        satzmodelle: defineCollection({
            source: 'satzmodelle/**/*.{md,yaml}',
            type: 'page',
            schema: z.object({
                title: z.string(),
                tags: z.array(z.string()),
                scorePath: z.string(),
                homePath: z.string(),
                sound: z.string(),
                sound1: z.string(),
                sound2: z.string(),
                sound3: z.string(),
                sound4: z.string(),
            }),
        }),
    },
});
