<template>
  <div style="min-width: 220px">
    <label class="form-label small fw-bold text-uppercase text-muted mb-1">Sort By Price</label>
    <select class="form-select" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option value="default">Default Ordering</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SortToggle",
  props: {
    modelValue: {
      type: String,
      default: "default",
    },
  },
  emits: ["update:modelValue"],
};
</script>
