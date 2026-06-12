<template>
  <div>
    <label class="form-label small fw-bold text-uppercase text-muted mb-1">Search Property Listings</label>
    <input
      type="text"
      class="form-control"
      placeholder="Search by title or location..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
};
</script>
