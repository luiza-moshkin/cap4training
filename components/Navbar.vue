<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid align-items-lg-center">
            <a class="navbar-brand base-link" href="/">
                <img src="/public/ressource/img/logo_green.svg" alt="Cap4Learning - Logo" itemprop="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <svg class="icon icon-menu-open">
                    <use xlink:href="#icon-menu-open"></use>
                </svg>
                <svg class="icon icon-menu-close">
                    <use xlink:href="#icon-menu-close"></use>
                </svg>
            </button>
            <div class="collapse navbar-collapse align-items-start js-hover-triggering" id="navbarNav">
                <div class="navbar-left">
                    <ul class="navbar-nav">

                        <li class="nav-item active first"> <a href="/" class="nav-link">Accueil</a>
                        </li>


                        <li class="nav-item dropdown"> <a href="#" class="nav-link dropdown-toggle base-link"
                                data-toggle="dropdown" role="button" aria-expanded="false" data-bs-toggle="dropdown"
                                id="courses_list">Formations</a>
                            <ul class="dropdown-menu menu_level_1" aria-labelled-by="courses_list">

                                <li class="first"> <a href="#">Toutes</a>
                                </li>


                                <li> <a href="#">API</a>
                                </li>


                                <li> <a href="#">Cybersécurité</a>
                                </li>


                                <li> <a href="#">MuleSoft</a>
                                </li>


                                <li> <a href="#">Outils BI</a>
                                </li>


                                <li> <a href="#">RGPD</a>
                                </li>


                                <li class="last"> <a href="#">Sur-mesure</a>
                                </li>


                            </ul>

                        </li>


                        <li class="nav-item"> <a href="#" class="nav-link">Actualités</a>
                        </li>


                        <li class="nav-item last"> <a href="#" class="nav-link">Contact</a>
                        </li>


                    </ul>

                </div>
                <div class="navbar-right">


                    <button class="navbar-search js-searchbar-opening btn btn-link pe-0">
                        <svg class="icon icon-search ">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                        <span class="visually-hidden">Recherche</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

const categorys = await queryContent("/category/fr/").sort({ date: -1 }).find(); // fetch category
</script>