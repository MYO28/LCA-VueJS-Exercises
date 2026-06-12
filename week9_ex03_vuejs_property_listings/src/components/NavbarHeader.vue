<template>
  <header class="navbar">
    <h1>Homes & Beyond</h1>
    <span>{{ listingsCount }} Properties</span>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["listingsCount"]);
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
}
</style>
