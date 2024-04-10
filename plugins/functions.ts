// https://nuxt.com/docs/guide/directory-structure/plugins

export default defineNuxtPlugin(() => {
    return {
        provide: {
            extractTitleFromPath: (path: string | undefined) => {
                if (path) {
                    const segments = path.split('/'); // Divise l'URL en segments
                    return segments[segments.length - 1]; // Renvoie le dernier segment (le titre)
                }

            }
        }
    }
})