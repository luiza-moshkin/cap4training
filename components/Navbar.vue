<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid align-items-lg-center">
            <NuxtLink class="navbar-brand base-link" :to="'/'">
                <img src="/public/ressource/img/logo_green.svg" alt="Cap4Learning - Logo" itemprop="logo">
            </NuxtLink>
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


                        <li class="nav-item first" :class="{ 'active': $route.path == '/' }">
                            <NuxtLink class="nav-link" :to="'/'">
                                Welcome
                            </NuxtLink>
                        </li>


                        <li class="nav-item dropdown" :class="{ 'active': $route.path == '/training' }">
                            <a href="#" class="nav-link dropdown-toggle base-link" data-toggle="dropdown" role="button"
                                aria-expanded="false" data-bs-toggle="dropdown" id="courses_list">Trainings</a>
                            <ul class="dropdown-menu menu_level_1" aria-labelled-by="courses_list">

                                <li class="first">
                                    <NuxtLink :to="'/training'">
                                        All
                                    </NuxtLink>
                                </li>

                                <div v-for="cat of categorys">
                                    <li>
                                        <NuxtLink :to="cat._path">
                                            {{ cat.title }}
                                        </NuxtLink>
                                    </li>
                                </div>


                                <li class="last" :class="{ 'active': $route.path == '/custom-made' }">
                                    <NuxtLink :to="'/custom-made'">
                                        Custom made
                                    </NuxtLink>
                                </li>


                            </ul>

                        </li>


                        <li class="nav-item" :class="{ 'active': $route.path == '/news' }">
                            <NuxtLink class="nav-link" :to="'/news'">
                                News
                            </NuxtLink>
                        </li>


                        <li class="nav-item last" :class="{ 'active': $route.path == '/contact' }">
                            <NuxtLink class="nav-link" :to="'/contact'">
                                Contact
                            </NuxtLink>
                        </li>

                    </ul>

                </div>
                <div class="navbar-right">


                    <button class="navbar-search js-searchbar-opening btn btn-link pe-0">
                        <svg class="icon icon-search ">
                            <use xlink:href="#icon-search"></use>
                        </svg>
                        <span class="visually-hidden">Search</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

const categorys = await queryContent("/category/fr/").find(); // fetch category





</script>