import { execSync } from 'node:child_process';

function getCurrentCommitSha() {
    try {
        return execSync(`git rev-parse --short=7 HEAD`, { encoding: 'utf8' }).toString().trim();
    } catch {
        return '';
    }
}

const currentCommitSha = getCurrentCommitSha();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    runtimeConfig: {
        public: {
            currentCommitSha,
        },
    },
    modules: ['@nuxt/content', '@nuxt/ui',  '@pinia/nuxt','@nuxtjs/i18n'],
    css: ['~/assets/main.css'],
    i18n: {
        strategy: 'prefix_except_default',
        locales: [
            { code: 'de', language: 'de-DE', file: 'de.yaml', dir: 'ltr' },
        ],
        defaultLocale: 'de',
        langDir: 'locales/',
    },
    vite: {
        worker: {
            format: 'es',
        },
        optimizeDeps: {
            exclude: ['verovio'],
        },
    },
    ui: {
        theme: {
            colors: [
                'primary',
                'secondary',
                'neutral',
            ],
        },
    },
});
