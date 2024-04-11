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
                                {{ $t('welcome') }}
                            </NuxtLink>
                        </li>


                        <li class="nav-item dropdown" :class="{ 'active': $route.path == '/training' }">
                            <a href="#" class="nav-link dropdown-toggle base-link" data-toggle="dropdown" role="button"
                                aria-expanded="false" data-bs-toggle="dropdown" id="courses_list">{{ $t('trainings')
                                }}</a>
                            <ul class="dropdown-menu menu_level_1" aria-labelled-by="courses_list">

                                <li class="first">
                                    <NuxtLink :to="'/training'">
                                        {{ $t('all') }}
                                    </NuxtLink>
                                </li>

                                <div v-for="cat of categorys">
                                    <li>
                                        <NuxtLink :to="'/training/' +  $extractTitleFromPath(cat._path)">
                                            {{ cat.title }}
                                        </NuxtLink>
                                    </li>
                                </div>


                                <li class="last" :class="{ 'active': $route.path == '/custom-made' }">
                                    <NuxtLink :to="'/custom-made'">
                                        {{ $t('customMade') }}
                                    </NuxtLink>
                                </li>


                            </ul>

                        </li>


                        <li class="nav-item" :class="{ 'active': $route.path == '/blog' }">
                            <NuxtLink class="nav-link" :to="'/blog'">
                                {{ $t('news') }}
                            </NuxtLink>
                        </li>


                        <li class="nav-item last" :class="{ 'active': $route.path == '/contact' }">
                            <NuxtLink class="nav-link" :to="'/contact'">
                                {{ $t('contact') }}
                            </NuxtLink>
                        </li>

                    </ul>

                </div>
                <div class="navbar-right">

                    <div>
                        <div>
                            <LangSwitcher />
                        </div>
                    </div>
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
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import Index from '~/pages/index.vue';

const { locale, setLocale } = useI18n(); // for the translation 

const categorys = ref<ParsedContent[]>([]);
loadCategorys();
// Charger les données initiales
async function loadCategorys() {
    categorys.value = await queryContent("/category/" + locale.value + "/").find();
}

watch(locale, () => {
    loadCategorys();
})


useHead({
    script: [
        { src: "/navBarBurgerMenu.js", type: "text/javascript" },
    ],
});

</script>