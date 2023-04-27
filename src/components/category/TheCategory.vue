<template>
<div class="category container">
  <h2 class="category__title">
    Категории
  </h2>
  <ol class="category__content" v-for="category in categories">
    <li
        class="category__content-item"
        @click="category.open.value = !category.open.value"
    >
      {{category.category}}
    </li>
    <ul
        class="category__content-subcategories"
        v-show="category.open.value"
    >
      <li v-show="category.sub_categories.sub_category" class="category__content-item-subcategories"><RouterLink to="/">{{ category.sub_categories.sub_category}}</RouterLink></li>
      <li v-show="category.sub_categories.sub_category1" class="category__content-item-subcategories">{{ category.sub_categories.sub_category1}}</li>
      <li v-show="category.sub_categories.sub_category2" class="category__content-item-subcategories">{{ category.sub_categories.sub_category2}}</li>
    </ul>
  </ol>
</div>
</template>

<script setup>
  import {ref} from "vue";

  const categories = [
    {
      category:'bebra',
      open:ref(false),
      sub_categories: {

        sub_category1: 'aboba2',
        sub_category2: 'aboba3',

      }
    },
    {
      category:'bebra1',
      open:ref(false),
      sub_categories: {

        sub_category: 'aboba',
        sub_category1: 'aboba2',
        sub_category2: 'aboba3',

      }
    },
    {
      category:'bebra2',
      open:ref(false),
      sub_categories: {

        sub_category: 'aboba',
        sub_category1: 'aboba2',
        sub_category2: 'aboba3',

      }
    }
  ]
</script>

<style scoped lang="scss">
  .category{
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__content{
      &-item{
        padding: 10px;
        width: fit-content;
        cursor: pointer;
        margin: 10px 0;
      }
      &-subcategories{
        padding-left: 5%;
      }
    }
  }
  .show{
    display: block;
  }
</style>