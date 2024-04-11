<script setup lang="ts">
const locale = process.client ? navigator.language : '';
const browserLanguage = locale.substr(0, 2).toLowerCase(); // en-US to en
const posts = await queryContent("/training/fr/").sort({ created_at: -1 }).find();
const categorys = await queryContent("/category/fr/").find(); // fetch category

let selectedCategory: String = "Our training formation per catégorie"

const updateSelectedCategory = (category: String | undefined) => {
  if (category != undefined) {
    selectedCategory = category;

  }
  else {
    let selectedCategory: String = "Our training formation per catégorie"
  }
}

</script>
<template>
  All formation
  <div class="mb-2" v-for="post of posts">
    <NuxtLink :to="'/training/' + post.category + '/' +$extractTitleFromPath(post._path)">
      {{ post.title }}
    </NuxtLink>
  </div>


  <div class="home__training-dropdown dropdown">
    <button class="btn btn-underline dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
      aria-expanded="false">
      {{ selectedCategory }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li>
        <a class="dropdown-item" @click="updateSelectedCategory('All')" href="#">
          Toutes
        </a>
      </li>
      <li v-for="cat of categorys">
        <a class="dropdown-item" @click="updateSelectedCategory(cat.title)" href="#">
          {{ cat.title }}
        </a>
      </li>

      <li>
        <a class="dropdown-item" @click="updateSelectedCategory('Custom made')" href="#">
          Sur-mesure
        </a>
      </li>
    </ul>
  </div>



  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>
