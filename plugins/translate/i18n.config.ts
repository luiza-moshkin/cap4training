export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            welcome: 'Welcome',
            hello: 'Hello',
            trainings: 'Trainings',
            all: 'All',
            customMade: 'Custom made',
            news: 'News',
            contact: 'Contact',
            weAreExpert: 'We are training experts',
            weHelpClients: 'We he',
            aimExcellence: 'Aim for excellence thanks to our dedicated training courses.'
        },
        fr: {
            welcome: 'Bienvenue',
            Hhello: 'Bonjour',
            all: 'Tous',
            trainings: 'Trainings',
            customMade: 'Sur-mesure',
            news: 'Actualité',
            contact: 'Contact',
            weAreExpert: 'Nous sommes experts en formation',
            aimExcellence: "Visez l'excellence grâce à nos formations dédiées"
        }
    }
}))