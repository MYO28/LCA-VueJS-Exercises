<template>
  <div class="property-card">
    <h2>{{ title }}</h2>
    <p>Location: {{ location }}</p>
    <p>Price: ${{ priceUSD }}</p>
    <p>Type: {{ type }}</p>
    <p v-if="available">Available</p>
    <p v-else class="not-available">Not Available</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  location: String,
  priceUSD: Number,
  type: String,
  available: Boolean,
});
</script>

<style scoped>
.property-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
}

.not-available {
  color: red;
}
</style>
