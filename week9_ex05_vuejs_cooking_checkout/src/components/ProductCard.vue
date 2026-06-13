<template>
  <div class="product-card" :class="{ 'sold-out': course.stock === 0 }">
    <h3>{{ course.title }}</h3>
    <p class="price">R {{ course.price.toFixed(2) }}</p>

    <p v-if="course.stock > 0" class="stock-status">
      Available Seats: <strong>{{ course.stock }}</strong>
    </p>
    <p v-else class="stock-status sold-out-text">Sold Out</p>

    <button class="add-btn" @click="$emit('add-to-cart', course)" :disabled="course.stock === 0">
      {{ course.stock > 0 ? "Reserve Spot" : "Sold Out" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card.sold-out {
  background-color: #f9fafb;
  border-color: #f3f4f6;
}

h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #111827;
}

.price {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2563eb;
  margin: 0 0 1rem 0;
}

.stock-status {
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
}

.sold-out-text {
  color: #dc2626;
  font-weight: 600;
}

.add-btn {
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
}

.add-btn:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.add-btn:disabled {
  background-color: #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
}
</style>
