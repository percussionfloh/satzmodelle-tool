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
                midiPath: z.string(),
                sounds: z.array(z.object({
                    label: z.string(),
                    url: z.string().url(),
                })),    
            }),
        }),
        tags: defineCollection({
            source: 'tags.yaml',
            type: 'data',
            schema: z.object({
                tags: z.array(
                    z.object({
                        id: z.string(),
                        type: z.string(),
                    })
                ),
            }),
        }),
    },
}); 
