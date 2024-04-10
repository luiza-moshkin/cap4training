<script setup lang="ts">
const route = useRoute();
const params = route.params;
const slug = params.slug;
const training = await queryContent(`/training/fr/${slug}`).findOne();
const categoryObject = await queryContent(`/category/fr/${training.category}`).findOne();

</script>
<!--
<template>
  <v-container>
    <ContentRenderer :value="training">
      <b>Training title : </b>{{ training.title }} {{ categoryObject.title }}<br />
    </ContentRenderer>
  </v-container>
</template>

-->






<!-- 


                                        <script type="text/javascript" nonce="">
                                  var recaptchaCallback_contact_captcha = function() {
                                      grecaptcha.execute('6LdzIHsaAAAAAJ4rHpkgpXDZicBw8x2Vw9xvwXIt', {action: 'contact'}).then(function(token) {
                                          document.getElementById('contact_captcha').value = token;
                                      });
                                      setTimeout(recaptchaCallback_contact_captcha, 100000);
                                  };
                                        <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=6LdzIHsaAAAAAJ4rHpkgpXDZicBw8x2Vw9xvwXIt&amp;onload=recaptchaCallback_contact_captcha" async="" defer="" nonce=""></script>
-->


<template>
  <div class="container-fluid -corner">
    <div class="overflower -top"></div>



    <div class="training-detail">
      <div class="row justify-content-center">
        <div class="col-10 col-lg-8">
          <div class="training-detail__header">
            <a href="/formation/recherche/formations-mulesoft" class="training__head-link">
              MuleSoft
            </a>

            <h1 class="h2">
              <ContentRenderer :value="training">
                {{ training.title }} {{ categoryObject.title }}<br />
              </ContentRenderer>
            </h1>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-10">
          <div class="training-detail__banner">
            <div class="training-detail__banner-left">
              img
              <!--<img src="/uploads/media/default/0001/01/2c1f7e5caf7bf61fd5e4d4d7dff7543448352b3f.jpeg" alt="MuleSoft"
                class="training__main-img">-->
            </div>

            <div class="training-detail__banner-right">
              <div class="ms-xxl-3 ps-xxl-1 mb-4">
                <div class="training-detail__slots js-training-slot-wrapper">

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <h4 class="training-listing__subtitle mb-0">
                        Prochaine session
                      </h4>
                    </div>

                    <div class="training-slot__location">
                      <svg class="icon icon-location -small">
                        <use xlink:href="#icon-location"></use>
                      </svg>
                    </div>

                    <div class="training-slot__lang">
                      <svg class="icon icon-lang -small">
                        <use xlink:href="#icon-lang"></use>
                      </svg>
                    </div>

                    <div class="training-slot__availibility">

                    </div>
                  </div>


                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        15 / 04 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        06 / 06 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        24 / 06 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        01 / 04 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        15 / 04 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        20 / 05 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        13 / 06 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        24 / 06 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        Fr
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>

                  <div class="training-slot">
                    <div class="training-slot__date">
                      <span>
                        08 / 07 / 2024
                      </span>
                    </div>
                    <div class="training-slot__location">
                      <span>
                        en ligne - Clôture des inscriptions 3 jours ouvrables avant la formation.
                      </span>
                    </div>
                    <div class="training-slot__lang">
                      <span>
                        En
                      </span>
                    </div>
                    <div class="training-slot__availibility">
                    </div>
                  </div>
                </div>
                <a href="#" class="js-training-slot-btn training-detail__slots-btn">
                  Voir plus
                </a>
              </div>

              <p class="training-detail__cta">
                Disponible en France et au Luxembourg
              </p>

              <div class="d-flex flex-row align-items-center mb-2">
                <svg class="icon icon-clock -small me-2">
                  <use xlink:href="#icon-clock"></use>
                </svg>
                <span>
                  2 jours
                  &nbsp;/&nbsp;
                  14 heures
                </span>
              </div>

              <div class="d-flex flex-row align-items-center mb-2">
                <svg class="icon icon-euro -small me-2">
                  <use xlink:href="#icon-euro"></use>
                </svg>
                1450 € HT ( Prix Inter )
              </div>

              <p class="training-detail__cta">
                <a href="#footer" class="js-select-change" data-select-id="contact_type"
                  data-select-option="contact_intra_information">Demande de devis</a> pour une formation en intra
              </p>


            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-10 col-lg-8">

          <div class="training-detail__info">

            <div class="wysiwyg -lead">
              <p>Ce cours est destiné à tous les ingénieurs DevOps, aux opérations informatiques, aux développeurs et
                aux architectes qui souhaitent acquérir une expérience pratique de la gestion et de la surveillance des
                applications Mule déployées sur CloudHub 2.0.</p>

              <p>Note : Ce cours ne se concentre pas sur les différences entre CloudHub et CloudHub 2.0, ni sur la
                définition d'un chemin de migration. Des ressources concernant la migration seront disponibles
                ultérieurement. Pour la version précédente du cours sur CloudHub, <a
                  href="https://www.cap4learning.com/formation/formations-mulesoft/exploitation-anypoint-platform-cloudhub">cliquez
                  ici.</a></p>
            </div>

            <hr>


            <h2 class="h4">Objectifs pédagogiques</h2>
            <div class="wysiwyg">
              <ul>
                <li>Configurer, déployer, gérer, surveiller et analyser les applications Mule sur CloudHub 2.0.</li>
                <li>Configurer les options d'équilibrage de charge et de haute disponibilité pour les applications Mule
                  sur CloudHub 2.0</li>
                <li>Utiliser les API REST de la plateforme Anypoint pour gérer les applications Mule sur CloudHub 2.0.
                </li>
              </ul>
            </div>

            <h2 class="h4">Public</h2>
            <div class="wysiwyg">
              <p>Cette formation s’adresse à tout le personnel ingénieurs DevOps, aux opérations informatiques, aux
                développeurs et aux architectes</p>
            </div>

            <h2 class="h4">Prérequis</h2>
            <div class="wysiwyg">
              <p>Une connaissance de l'administration système et des commandes serveur<br>
                Une compréhension basique des formats de données tels que XML, CSV, et JSON<br>
                Une compréhension élémentaire des technologies d'intégration typiques telles que HTTP, JMS, JDBC, REST
                et SOAP.</p>
            </div>
          </div>

          <div class="training-detail__bottom">
            <div class="training-detail__program">
            </div>

            <div class="training-detail__feature">
              <h3 class="h5">
                Méthodes de formation
              </h3>
              <div class="wysiwyg">
                <p>12 participants maximum.Alternance d’apports théoriques et pratiques. Support de cours et documents
                  d’application remis en fin de formation.&nbsp;</p>
              </div>

              <h3 class="h5">
                Validation des acquis
              </h3>
              <div class="wysiwyg">
                <p>Quizz final et évaluation de la formation.</p>
              </div>

              <h3 class="h5">
                Formateur
              </h3>
              <div class="wysiwyg">
                Formateur certifié MuleSoft trainer.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-10">

          <div class="training__contact js-training-form" id="contact">

            <h2 class="h2">Vous souhaitez avoir plus détails sur cette formation...</h2>

            <p class="lead">Exploitation Anypoint Platform : CloudHub 2.0</p>

            <form name="contact" method="post">
              <div class="form-floating form-group"><input type="text" id="contact_name" name="contact[name]" required
                  placeholder=" " class="form-control"><label for="contact_name" class="required">Votre nom</label>
              </div>
              <div class="form-floating form-group"><input type="text" id="contact_email" name="contact[email]" required
                  placeholder=" " class="form-control"><label for="contact_email" class="required">Votre email</label>
              </div>
              <div class="form-group"><select id="contact_type" name="contact[type]" class="form-control">
                  <option value="contact_devis" selected>Demande de devis</option>
                  <option value="contact_more_information">Je veux en savoir plus sur cette formation</option>
                  <option value="contact_intra_information">Je souhaite avoir des renseignements pour une formule intra
                  </option>
                  <option value="contact_other">Autres</option>
                </select></div>
              <div class="form-floating form-group"><textarea id="contact_message" name="contact[message]" required
                  placeholder=" " class="form-control"></textarea><label for="contact_message" class="required">Votre
                  message</label></div>
              <input type="hidden" id="contact_captcha" name="contact[captcha]"
                value="03AFcWeA6IdJNo0quijhCYBAKjPvrHzDDjI_Szi_EhRUkrElm3BRWS6zWMM6skQ5m4a8phgGSiF6Xdk_f8dP2oLV-msCfthQ0tDAkvFV313rYC1siUb9yUvMvvK_ZGUMXX67WeiVqmwTffkB3wq6JNd-VIwIVITQf2VlLJKrUHtn99KQ5R1oEbrDOooZI_Wurf47YaUHSb1KSw0Wxq0BjDkyV7IUTjXS7XUuJseJPIjwhJ3cavw4lpxzfyMqGOHALXELbHdExZuIkzLAaF0wi1ppfNziP4wK7KjIWHoMHkCdwLJuw1bRkMIejn5BZuXuF3OF9Ypr4DYLUZc0UIpoTYi-e5xQIyeK4rqmVNPxCZ8hhXZ_8lqAZz5k6GfoX7FcTEzwJiCBkcyeDGkz9O-UzOfUrX0sbPYeBxmkHWVTrtwfzfGS_-4PqjljbvcKAmwK_XxZ7loKRbjnKiXgm9XrWFmVK7iUuVg0sKMobRHz1rjzEb3a3IBP8u5HIhBPvJPPQMnH37-Hy8PNFrPVUBH0zFOfT7-drzGrPc2y-UW6QC3md5SoTjgSnFKWBZowg8CNKyvs3JwbBF0uBWN-tkpqfFRfTLKM9a0t-kDDq5LLeKeIEVx1iBmtz_v-GnGeRON5Ur60bTUV7PEjo5jfHzCToYiXrBRLXspOzwydqzrSTT6x-DT4f3RnSIJ9NLMx24CVHlvSe79vThe1hL">


              <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-4">
                <div class="wysiwyg">
                  <p>
                    Les informations recueillies à partir de ce formulaire sont transmises à notre service commercial
                    pour répondre à votre demande citée en objet.<br><br> <a class="base-link" href="/vie-privee"><b>En
                        savoir plus sur la gestion de vos données et vos droits.</b></a>
                  </p>
                </div>
                <div class="btn-fx-wrapper -fixed mt-4 mt-lg-0">
                  <span class="btn-fx-circle"></span>
                  <button type="submit" class="btn btn-primary btn-fx-container">
                    <span class="btn-fx-inner">
                      Envoyer!
                    </span>
                  </button>
                </div>
              </div>
              <input type="hidden" id="contact__token" name="contact[_token]"
                value="443mQ6RSTw4ljGdoOyEcr4zRUfT4ckrhRO85hmghReA">
            </form>
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
                <img src="/public/ressource/img/logo_white.svg" alt="CAP4Learning logo" class="searchbar__logo">

                <h2 class="h2 searchbar__title">
                  <svg class="icon icon-search ">
                    <use xlink:href="#icon-search"></use>
                  </svg>
                  Que cherchez-vous ?
                </h2>

                <p class="searchbar__description">Une actualité, une compétence, une formation... Dites-nous comment
                  nous pouvons vous renseigner.</p>

                <form name="training_search" method="get" action="/formation/recherche/all">
                  <div
                    class="d-flex flex-column flex-lg-row justify-content-center align-items-stretch align-items-lg-center">
                    <div class="flex-grow-1">
                      <div class="form-floating form-group"><input type="text" id="training_search_title"
                          name="training_search[title]" placeholder=" " class="form-control"><label
                          for="training_search_title">Que voulez-vous apprendre aujourd'hui ?</label></div>
                      <span class="d-none">
                        <div class="-spaced form-group">
                          <div class="form-check"> <input type="checkbox" id="training_search_eligibleCpf"
                              name="training_search[eligibleCpf]" class="form-check-input" value="1">
                            <label class="form-check-label" for="training_search_eligibleCpf">seulement les formations
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
                    value="s7lorjbhGuXoDVwfHxqx0ubYyrl3PzLkr4LARLsIcUU">
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