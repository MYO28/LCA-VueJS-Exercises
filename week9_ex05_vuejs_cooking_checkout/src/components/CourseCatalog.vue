<template>
  <div class="catalog-container">
    <h2>Available Masterclasses</h2>
    <div class="course-grid">
      <ProductCard v-for="course in courses" :key="course.id" :course="course" @add-to-cart="$emit('add-to-cart', course)" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "CourseCatalog",
  components: {
    ProductCard,
  },
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.catalog-container h2 {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #111827;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
</style>
