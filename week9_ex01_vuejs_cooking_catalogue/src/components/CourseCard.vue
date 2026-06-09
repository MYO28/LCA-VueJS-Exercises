<template>
  <div class="card h-100 shadow-sm course-card border-0 position-relative" :class="{ 'opacity-75 bg-light': !course.isAvailable }">
    <div
      v-if="!course.isAvailable"
      class="sold-out-badge badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 uppercase fw-bold shadow-sm"
    >
      Sold Out
    </div>

    <img :src="course.image" class="card-img-top object-fit-cover" :alt="course.title" height="200" />

    <div class="card-body d-flex flex-column p-4">
      <div class="d-flex justify-content-between align-items-start mb-2">
        <h5 class="card-title fw-bold mb-0 text-dark">{{ course.title }}</h5>
      </div>

      <p class="text-muted small mb-3">
        Hosted by <span class="text-secondary fw-semibold">{{ course.chef }}</span>
      </p>

      <div class="mb-4 d-flex align-items-center gap-2">
        <span class="badge" :class="levelBadgeClass">{{ course.level }}</span>
        <span class="fs-5 fw-bold text-dark">{{ formatPrice(course.price) }}</span>
      </div>

      <div class="mt-auto">
        <button
          v-if="course.isAvailable"
          @click="$emit('toggle-wishlist', course.id)"
          class="btn w-100 fw-semibold transition-btn"
          :class="isSaved ? 'btn-danger' : 'btn-outline-warning text-dark'"
        >
          {{ isSaved ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist" }}
        </button>
        <button v-else class="btn btn-secondary w-100 fw-semibold" disabled>Unavailable</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
    isSaved: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggle-wishlist"],
  computed: {
    levelBadgeClass() {
      return {
        "bg-success-subtle text-success": this.course.level === "Beginner",
        "bg-warning-subtle text-warning-emphasis": this.course.level === "Intermediate",
        "bg-danger-subtle text-danger": this.course.level === "Advanced",
      };
    },
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
};
</script>

<style scoped>
.course-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08) !important;
}

.sold-out-badge {
  z-index: 2;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

.transition-btn {
  transition: all 0.2s ease-in-out;
}
</style>
