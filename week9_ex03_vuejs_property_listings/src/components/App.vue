<template>
  <div id="app">
    <NavbarHeader :listingsCount="properties.length" />

    <SearchInput v-model="searchQuery" />

    <SortToggle v-model="sortOrder" />

    <PropertyCard v-for="property in filteredProperties" :key="property.id" v-bind="property" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import NavbarHeader from "./NavbarHeader.vue";
import SearchInput from "./SearchInput.vue";
import SortToggle from "./SortToggle.vue";

const properties = [
  {
    id: 1,
    title: "Sea Point Flat",
    location: "Cape Town Sea Point",
    priceUSD: 350,
    type: "Apartment",
    available: true,
  },
];

const searchQuery = ref("");
const sortOrder = ref("asc");

const filteredProperties = computed(() =>
  properties
    .filter(
      (property) =>
        property.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder.value === "asc") {
        return a.priceUSD - b.priceUSD;
      } else if (sortOrder.value === "desc") {
        return b.priceUSD - a.priceUSD;
      }
    }),
);
</script>
