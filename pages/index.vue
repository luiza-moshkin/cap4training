<template>
    <div class="container-fluid -corner">
        <div class="row justify-content-center">
            <div class="col-10">
                <section class="home__intro" id="home-intro">
                    <h1 class="home__intro-title">
                        {{ $t('weAreExpert') }}</h1>
                    <p class="home__intro-desc">
                        {{ $t('aimExcellence') }}
                    </p>
                    <div class="home__intro-list">
                        <img class="home__intro-img" src="/public/ressource/img/home/cap4_intro_blue.jpg"
                            alt="Cap4Learning - introduction blue picture">
                        <img class="home__intro-img" src="/public/ressource/img/home/cap4_intro_pink.jpg"
                            alt="Cap4Learning - introduction pink picture ">
                        <img class="home__intro-img" src="/public/ressource/img/home/cap4_intro_yellow.jpg"
                            alt="Cap4Learning - introduction yellow picture">
                        <img class="home__intro-img" src="/public/ressource/img/home/cap4_intro_purple.jpg"
                            alt="Cap4Learning - introduction blue picture">

                        <div class="home__intro-circles">
                            <span class="animated-circle -pink"></span>
                            <span class="animated-circle -small"></span>
                            <span class="animated-circle"></span>
                            <span class="animated-circle"></span>
                            <span class="animated-circle -medium -pink"></span>
                            <span class="animated-circle -small"></span>
                            <span class="animated-circle -medium"></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="row">
            <div class="col-12 px-0">
                <section class="home__training" id="home-training">
                    <div class="home__training-listing">

                        <!-- 
                        <div class="home__training-search js-animation -active animate__animated animate__fadeInUp"
                            id="home-search-bar">

                                SEARCH BAR for formation
                            <form name="training_search" method="get" action="/formation/recherche/all">
                                <svg class="icon icon-search ">
                                    <use xlink:href="#icon-search"></use>
                                </svg>
                                <div class="form-floating form-group"><input type="text" id="training_search_title"
                                        name="training_search[title]" placeholder=" " class="form-control"><label
                                        for="training_search_title">Recherche</label></div>
                                <span class="d-none">
                                    <div class="-spaced form-group">
                                        <div class="form-check"> <input type="checkbox" id="training_search_eligibleCpf"
                                                name="training_search[eligibleCpf]" class="form-check-input" value="1">
                                            <label class="form-check-label" for="training_search_eligibleCpf">seulement
                                                les formations
                                                éligibles au CPF</label>
                                        </div>
                                    </div>
                                </span>
                                <div class="btn-fx-wrapper">
                                    <span class="btn-fx-circle"></span>
                                    <button type="submit" class="btn btn-primary btn-fx-container">
                                        <span class="btn-fx-inner">
                                            Trouver!
                                        </span>
                                    </button>
                                </div>
                                <input type="hidden" id="training_search__token" name="training_search[_token]"
                                    value="Hoi4PkxIZ2tryIwn6QSjuK46xcu9Bw6x64C47yMSMFI">
                            </form>



                        </div>
 -->

                        <div class="js-animation -active animate__animated animate__fadeInUp" id="home-training-list">
                            <div class="home__training-dropdown dropdown">
                                <button class="btn btn-underline dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Nos formations par catégorie
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Toutes
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            API
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Cybersécurité
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            MuleSoft
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Outils BI
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            RGPD
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Sur-mesure
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h2 class="h3">
                                Nos formations à la une:
                            </h2>

                            <div class="home__training-list">
                                <article class="training-teaser">
                                    <div class="training-teaser__wrapper">
                                        <div class="training-teaser__tile">
                                            <div class="training-teaser__inside">
                                                <h3 class="training-teaser__title">
                                                    Exploitation Anypoint Platform : CloudHub 2.0
                                                </h3>
                                                <a href="#" class="training-teaser__link stretched-link">
                                                    <span class="visually-hidden">En savoir plus</span>
                                                    <svg class="icon icon-link">
                                                        <use xlink:href="#icon-link"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="training-teaser">
                                    <div class="training-teaser__wrapper">
                                        <div class="training-teaser__tile">
                                            <div class="training-teaser__inside">
                                                <h3 class="training-teaser__title">
                                                    Architecture Anypoint Platform : Application Networks
                                                </h3>
                                                <a href="#" class="training-teaser__link stretched-link">
                                                    <span class="visually-hidden">En savoir plus</span>
                                                    <svg class="icon icon-link">
                                                        <use xlink:href="#icon-link"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="training-teaser">
                                    <div class="training-teaser__wrapper">
                                        <div class="training-teaser__tile">
                                            <div class="training-teaser__inside">
                                                <h3 class="training-teaser__title">
                                                    Devenir développeur d'API avec Python
                                                </h3>
                                                <a href="#" class="training-teaser__link stretched-link">
                                                    <span class="visually-hidden">En savoir plus</span>
                                                    <svg class="icon icon-link">
                                                        <use xlink:href="#icon-link"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="training-teaser">
                                    <div class="training-teaser__wrapper">
                                        <div class="training-teaser__tile">
                                            <div class="training-teaser__inside">
                                                <h3 class="training-teaser__title">
                                                    Les attaques par ingénierie sociale
                                                </h3>
                                                <a href="#" class="training-teaser__link stretched-link">
                                                    <span class="visually-hidden">En savoir plus</span>
                                                    <svg class="icon icon-link">
                                                        <use xlink:href="#icon-link"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="training-teaser">
                                    <div class="training-teaser__wrapper">
                                        <div class="training-teaser__tile">
                                            <div class="training-teaser__inside">
                                                <h3 class="training-teaser__title">
                                                    Développement Anypoint Platform DataWeave (Mule 4)*
                                                </h3>
                                                <a href="#" class="training-teaser__link stretched-link">
                                                    <span class="visually-hidden">En savoir plus</span>
                                                    <svg class="icon icon-link">
                                                        <use xlink:href="#icon-link"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="training-teaser -discover">
                                    <div class="training-teaser__tile">
                                        <div class="training-teaser__inside">
                                            <h3 class="training-teaser__title">
                                                Consulter le <br> catalogue complet
                                            </h3>
                                            <a href="#" class="training-teaser__link stretched-link">
                                                <span class="visually-hidden">En savoir plus</span>
                                                <svg class="icon icon-link">
                                                    <use xlink:href="#icon-link"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>


                        </div>
                    </div>

                    <div class="home__training-content js-animation animate__slow animate__delay-05 -active animate__animated animate__fadeInUp"
                        id="home-training-content">
                        <img class="home__training-img" src="/public/ressource/img/home/cap4_training.jpg"
                            alt="Cap4Learning -  Atteindre vos objectifs professionnels">
                        <h2 class="home__training-title">
                            Atteindre vos objectifs professionnels
                        </h2>
                        <p class="home__training-desc">
                            Visez l'excellence grâce à nos parcours de formation dédiés.
                        </p>
                        <div class="home__training-circles">
                            <span class="animated-circle -pink"></span>
                            <span class="animated-circle -medium -pink"></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-10">
                <section class="home__offers" id="home-offer">
                    <div class="home__offers-content js-animation -active animate__animated animate__fadeInUp"
                        id="home-offer-content">
                        <h2 class="home__offers-title">
                            Ce que nous proposons<span class="text-secondary">.</span> <br>+ ce que nous
                            réalisons<span class="text-white">.</span>
                        </h2>
                        <p class="home__training-desc">
                            Qu'elles soient en inter- ou intra-entreprise, toutes nos formations sont basées sur
                            des scenarios pédagogiques développés avec la plus grande attention. Les contenus de
                            formations sont revus et mis à jour régulièrement pour en assurer la meilleure
                            pertinence.
                        </p>
                        <p class="home__training-desc mt-3">
                            Nous accordons une attention particulière à l'accueil des personnes en situation de
                            handicap physique. Que ce soit pour des formations présentielles ou à distance, nous
                            recommandons au participant dès son inscription de signaler la nature de son
                            handicap et ses besoins spécifiques. Nous mettrons tout en oeuvre pour que la
                            formation se déroule dans les meilleures conditions. Pour tout renseignement
                            concernant l'accueil des personnes en situation de handicap, <a href="#">contactez-nous</a>
                        </p>
                    </div>

                    <div class="home__offers-listing js-animation animate__slow -active animate__animated animate__fadeInRight"
                        id="home-offer-listing">

                        <!-- Innovation -->
                        <div class="js-offer-expandable offer">

                            <!-- this div is use in the typescript code -->
                            <div class="offer__wrapper">

                                <h3 class="offer__title">
                                    Innovation
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        Le développement des compétences opérationnelles est au coeur de notre
                                        métier. Nous veillons à anticiper les besoins de nos clients, à ajuster
                                        le contenu de nos formations pour satisfaire aux demandes les plus
                                        pointues des entreprises et à intégrer le meilleur des innovations
                                        pédagogiques.
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                </a>
                            </div>

                        </div>

                        <!-- Développez vos compétences -->
                        <div class="js-offer-expandable offer -big">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Développez vos compétences
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        Nous utilisons les méthodes les plus adaptées aux compétences visées par
                                        nos formations. e-learning, blended learning, tutorat, vidéo,
                                        présentiel, séminaire... la méthode est toujours au service du contenu.
                                        C'est en étudiant les objectifs professionnels que nous concevons des
                                        parcours pédagogiques parfaitement adaptés aux métiers porteurs auquels
                                        nous préparons les apprenants.
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                    <svg class="icon icon-link">
                                        <use xlink:href="#icon-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- métier porteur -->
                        <div class="js-offer-expandable offer -big">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Apprendre un <br>nouveau métier porteur
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        Les besoins des entreprises en termes de ressources IT sont de plus en
                                        plus importants. Par conséquent, les profils d’expert IT, au sens large,
                                        et les métiers du numérique deviennent incontournables dans le monde de
                                        l'entreprise. Nos formations vous permettent d’obtenir le socle de
                                        savoirs pour devenir de futurs experts
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                    <svg class="icon icon-link">
                                        <use xlink:href="#icon-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Formation continue -->
                        <div class="js-offer-expandable offer">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Formation continue
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        Le maintien des compétences des formateurs est un ingrédient essentiel
                                        d'une formation de qualité. En plus de bénéficier d'une expérience
                                        terrain et d'un niveau d'expertise démontrable (certifications...) tous
                                        nos formateurs continuent à se former continuellement, tant sur leurs
                                        domaines d'intervention qu'aux méthodes pédagogiques qu'ils utilisent.
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                </a>
                            </div>
                        </div>

                        <!-- Profitez de l'expérience de nos formateurs -->
                        <div class="js-offer-expandable offer -big">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Profitez de l'expérience de nos formateurs
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        Nos formateurs sont autant pédagogues qu’experts dans leurs domaines
                                        d’intervention. Nous accompagnons les stagiaires dans la mise en œuvre
                                        de leurs acquis et nous proposons notre savoir- faire pour obtenir des
                                        résultats tout au long de leur carrière sous la forme de nouvelles
                                        compétences. La formation, c’est notre métier.
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                    <svg class="icon icon-link">
                                        <use xlink:href="#icon-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Une ingénierie pédagogique éprouvée -->
                        <div class="js-offer-expandable offer -big">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Une ingénierie pédagogique éprouvée
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        CAP4 LEARNING possède une ingénierie pédagogique éprouvée basée sur des
                                        scénarios pédagogiques pour toutes les formations réalisées qu’elles
                                        soient en inter ou en intra entreprises. Au moins une fois par an, les
                                        contenus de formations inter-entreprises sont examinés et peuvent
                                        parfois faire l’objet de réingénierie pédagogique si nécessaire.
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                    <svg class="icon icon-link">
                                        <use xlink:href="#icon-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Notre contrôle qualité -->
                        <div class="js-offer-expandable offer">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Notre contrôle qualité
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        La qualité est au coeur de toutes nos actions. Nous mettons en oeuvre
                                        tous les contrôles nécessaires à assurer que le contenu des formations
                                        est toujours en adéquation avec les objectifs pédagogiques proposés et
                                        les besoins de nos stagiaires
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                </a>
                            </div>
                        </div>

                        <!-- Ecouter et conseiller -->
                        <div class="js-offer-expandable offer">
                            <div class="offer__wrapper">
                                <h3 class="offer__title">
                                    Ecouter et conseiller
                                </h3>
                                <div class="offer__content">
                                    <div class="offer__close js-offer-close">
                                        <span class="visually-hidden">Fermer</span>
                                        <svg class="icon icon-cross">
                                            <use xlink:href="#icon-cross"></use>
                                        </svg>
                                    </div>
                                    <p class="offer__description">
                                        Our training is for women and men who trust us to develop the skills
                                        needed to grow their carreer. We always listen and strive to help our
                                        clients build training plans, advise students in the development of
                                        their competencies and measure the impact of our training in their
                                        learning experience.
                                    </p>
                                </div>
                                <a href="#" class="offer__cta">
                                    <span class="visually-hidden">En savoir plus</span>
                                </a>
                            </div>
                        </div>




                        <img src="/public/ressource/img/home/cap4_offer.svg" alt="Cap4Learning : Offers"
                            class="logo-offer">
                    </div>
                </section>

                <section class="my-5 py-lg-5 text-center">
                    <h2>En quelques chiffres :</h2>
                    <p class="h2">28 sessions de formations en 2021, 13 client B2B et 128 stagiaires</p>
                </section>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-6 col-md-2 offset-md-1 position-relative js-animation -active animate__animated animate__fadeInLeft"
                id="home-newsletter-img">
                <img src="/public/ressource/img/home/cap4_newsletter.jpg" class="home__nl-img"
                    alt="Cap4Learning - Nous sommes experts en formation">
                <div class="home__nl-circles">
                    <span class="animated-circle"></span>
                    <span class="animated-circle -medium"></span>
                </div>
            </div>

            <div class="col-10 offset-1 offset-1 col-md-8 offset-md-0">
                <div class="home__nl js-animation -active animate__animated animate__fadeIn" id="home-newsletter">
                    <h2 class="home__nl-title">Rester informé</h2>
                    <p class="home__nl-desc">
                        Inscrivez-vous à notre newsletter pour recevoir les actualités de Cap4 Learning.
                    </p>
                    <div id="mlb2-3523522" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-3523522">
                        <form class="form -nl nl-row-form" action="https://static.mailerlite.com/webforms/submit/l4m8c9"
                            data-code="l4m8c9" method="post" target="_blank">
                            <div class="form-floating form-group ml-field-email ml-validate-email">
                                <input type="email" id="fields[email]" name="fields[email]" required placeholder=" "
                                    class="form-control" aria-invalid="false">
                                <label for="fields[email]">votre adresse email</label>
                            </div>

                            <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-4">
                                <div class="d-none">
                                    <div
                                        class="form-check justify-content-between justify-content-lg-start mb-3 mb-lg-0 w-75">
                                        <input type="checkbox" class="form-check-input" name="checkbox_nl"
                                            id="checkbox_nl" checked required aria-invalid="false">
                                        <label class="form-check-label" for="checkbox_nl">
                                            __I agree to terms &amp; conditions
                                        </label>
                                        <input type="hidden" class="visually-hidden" name="ml-submit" value="1"
                                            aria-invalid="false">
                                    </div>
                                </div>

                                <small>
                                    Votre email est uniquement utilisé pour vous envoyer nos newsletters.
                                    <br>Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans
                                    la newsletter.
                                </small>
                                <div class="btn-fx-wrapper -fixed mt-3 mt-lg-0">
                                    <span class="btn-fx-circle"></span>
                                    <button type="submit" class="btn btn-white">
                                        <span class="btn-fx-inner">
                                            S'inscrire
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <img src="https://track.mailerlite.com/webforms/o/3523522/l4m8c9?v1612862753" width="1"
                                height="1"
                                style="max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block"
                                alt="." border="0">

                        </form>
                    </div>
                    <div class="ml-form-successBody nl-row-success" style="display:none">
                        <div class="ml-form-successContent">
                            <h4>Merci !</h4>
                            <p>Vous avez bien été inscrit à notre newsletter !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="searchbar js-animation" id="searchbar">
            <div class="position-relative h-100 w-100">
                <div class="container-fluid h-100">
                    <div class="row align-items-center justify-content-center h-100">
                        <div class="col-10 col-lg-8">
                            <div class="searchbar__wrapper">
                                <img src="/public/ressource/img/logo_white.svg" alt="CAP4Learning logo"
                                    class="searchbar__logo">

                                <h2 class="h2 searchbar__title">
                                    <svg class="icon icon-search ">
                                        <use xlink:href="#icon-search"></use>
                                    </svg>
                                    Que cherchez-vous ?
                                </h2>

                                <p class="searchbar__description">Une actualité, une compétence, une
                                    formation... Dites-nous comment nous pouvons vous renseigner.</p>

                                <form name="training_search" method="get" action="/formation/recherche/all">
                                    <div
                                        class="d-flex flex-column flex-lg-row justify-content-center align-items-stretch align-items-lg-center">
                                        <div class="flex-grow-1">
                                            <div class="form-floating form-group"><input type="text"
                                                    id="training_search_title" name="training_search[title]"
                                                    placeholder=" " class="form-control"><label
                                                    for="training_search_title">Que voulez-vous apprendre
                                                    aujourd'hui ?</label></div>
                                            <span class="d-none">
                                                <div class="-spaced form-group">
                                                    <div class="form-check"> <input type="checkbox"
                                                            id="training_search_eligibleCpf"
                                                            name="training_search[eligibleCpf]" class="form-check-input"
                                                            value="1">
                                                        <label class="form-check-label"
                                                            for="training_search_eligibleCpf">seulement les
                                                            formations éligibles au CPF</label>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>

                                        <div class="text-center ms-lg-3 mt-4 mt-lg-0 flex-grow-2">
                                            <div class="btn-fx-wrapper mt-lg-2">
                                                <span class="btn-fx-circle"></span>
                                                <button type="submit" class="btn btn-primary btn-fx-container">
                                                    <span class="btn-fx-inner">
                                                        Trouver!
                                                    </span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <input type="hidden" id="training_search__token" name="training_search[_token]"
                                        value="Hoi4PkxIZ2tryIwn6QSjuK46xcu9Bw6x64C47yMSMFI">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="js-searchbar-closing btn btn-link searchbar__close">
                    <svg class="icon icon-cross text-white">
                        <use xlink:href="#icon-cross"></use>
                    </svg>
                    <span class="visually-hidden">Recherche</span>
                </button>
            </div>
        </div>
    </div>
</template>



<script lang="ts">
export default {
    mounted() {
        const listOffer = document.querySelectorAll('.js-offer-expandable');
        listOffer.forEach(element => {
            element.addEventListener('click', (event) => {
                console.log((event.target as HTMLInputElement).value);
                if ((event.target as HTMLInputElement).matches('svg') || (event.target as HTMLInputElement).matches('use')) {
                    element.classList.remove('-center');
                    element.classList.remove('-expand');
                    listOffer.forEach(elmnt => {
                        elmnt.classList.remove('-resized');
                    });

                    element.parentElement?.classList.remove('-open')



                } else {

                    if (!element.classList.contains('-center')) {
                        listOffer.forEach(elmnt => {
                            elmnt.classList.add('-resized');
                            elmnt.classList.remove('-center');
                            elmnt.classList.remove('-expand');
                        });

                        element.classList.remove('-resized');
                        element.classList.add('-center');
                        element.parentElement?.classList.add('-open');
                        setTimeout(function () {
                            element.classList.add('-expand');
                        }, 400);

                    }
                }

            });
        });





    }
}
definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})
</script>