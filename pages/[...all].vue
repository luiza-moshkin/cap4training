<!-- ERROR PAGE -->

<template>



    <div class="container-fluid -corner">


        <div class="row justify-content-center">
            <div class="col-10">
                <div class="training main-content -listing align-items-stretch">
                    <div class="training__head" id="js-training-menu"
                        style="position: fixed; bottom: unset; top: unset;">
                        <h1>404 </h1>
                        <div class="wysiwyg -lead -lhbigger">
                            <p>La page que vous recherchez n’existe pas (encore) pourquoi ne pas essayer une recherche ?
                            </p>
                        </div>
                    </div>

                    <div class="training__listing">
                        <div class="training__404">
                            <img src="/public/ressource/img/error/1.png"
                                alt="La page que vous recherchez n’existe pas (encore) pourquoi ne pas essayer une recherche ?">
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

                                <p class="searchbar__description">Une actualité, une compétence, une formation...
                                    Dites-nous comment nous pouvons vous renseigner.</p>

                                <form name="training_search" method="get" action="/formation/recherche/all">
                                    <div
                                        class="d-flex flex-column flex-lg-row justify-content-center align-items-stretch align-items-lg-center">
                                        <div class="flex-grow-1">
                                            <div class="form-floating form-group"><input type="text"
                                                    id="training_search_title" name="training_search[title]"
                                                    placeholder=" " class="form-control"><label
                                                    for="training_search_title">Que voulez-vous apprendre aujourd'hui
                                                    ?</label></div>
                                            <span class="d-none">
                                                <div class="-spaced form-group">
                                                    <div class="form-check"> <input type="checkbox"
                                                            id="training_search_eligibleCpf"
                                                            name="training_search[eligibleCpf]" class="form-check-input"
                                                            value="1">
                                                        <label class="form-check-label"
                                                            for="training_search_eligibleCpf">seulement les formations
                                                            éligibles au CPF</label>
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
                                        value="jv1y_okusEOrsqLz8arsLAXt1uMe56zMbweTDlxzk6I">
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