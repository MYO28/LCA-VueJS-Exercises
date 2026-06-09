<template>
  <div>
    <nav class="navbar navbar-dark bg-dark shadow-sm sticky-top mb-4">
      <div class="container">
        <span class="navbar-brand mb-0 h1 fw-bold text-warning">🍳 Cooking Masterclass</span>
        <div class="d-flex align-items-center">
          <span class="btn btn-outline-warning position-relative fw-semibold">
            ❤️ Wishlist
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ wishlist.length }}
            </span>
          </span>
        </div>
      </div>
    </nav>

    <div class="container mb-5">
      <div class="row g-3 align-items-center justify-content-between mb-4 bg-white p-3 rounded shadow-sm">
        <div class="col-md-4">
          <select v-model="selectedLevel" class="form-select">
            <option value="All">All Difficulty Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div class="col-md-4 text-md-end">
          <div class="form-check form-switch d-inline-block text-start">
            <input v-model="showOnlyAvailable" class="form-check-input" type="checkbox" id="availableFilter" />
            <label class="form-check-label fw-medium" for="availableFilter">Hide Sold Out Classes</label>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="course in filteredCourses" :key="course.id">
          <CourseCard :course="course" :isSaved="wishlist.includes(course.id)" @toggle-wishlist="handleWishlistToggle" />
        </div>
      </div>

      <div v-if="filteredCourses.length === 0" class="text-center my-5 py-5">
        <h4 class="text-muted">No courses found matching your criteria.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "./components/CourseCard.vue";

export default {
  name: "App",
  components: {
    CourseCard,
  },
  data() {
    return {
      selectedLevel: "All",
      showOnlyAvailable: false,
      wishlist: [],
      courses: [
        {
          id: 1,
          title: "Artisanal Bread Making",
          chef: "Jean-Luc Picard",
          price: 850,
          level: "Beginner",
          isAvailable: true,
          image: "https://placehold.co/400x250/E67E22/ffffff?text=Bread+Making",
        },
        {
          id: 2,
          title: "Mastering French Pastries",
          chef: "Amélie Poulin",
          price: 1250,
          level: "Advanced",
          isAvailable: false,
          image: "https://placehold.co/400x250/9B59B6/ffffff?text=French+Pastries",
        },
        {
          id: 3,
          title: "Sushi Roll Perfection",
          chef: "Kenji Tanaka",
          price: 950,
          level: "Intermediate",
          isAvailable: true,
          image: "https://placehold.co/400x250/1ABC9C/ffffff?text=Sushi+Mastery",
        },
        {
          id: 4,
          title: "Classic Italian Pastas",
          chef: "Giovanni Rossi",
          price: 790,
          level: "Beginner",
          isAvailable: true,
          image: "https://placehold.co/400x250/3498DB/ffffff?text=Italian+Pasta",
        },
        {
          id: 5,
          title: "Advanced Sauce Techniques",
          chef: "Gordon Ramsay",
          price: 1500,
          level: "Advanced",
          isAvailable: true,
          image: "https://placehold.co/400x250/34495E/ffffff?text=Sauce+Techniques",
        },
        {
          id: 6,
          title: "Authentic Thai Street Food",
          chef: "Chai Siri",
          price: 890,
          level: "Intermediate",
          isAvailable: false,
          image: "https://placehold.co/400x250/E74C3C/ffffff?text=Thai+Street+Food",
        },
      ],
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter((course) => {
        const matchesLevel = this.selectedLevel === "All" || course.level === this.selectedLevel;
        const matchesAvailability = !this.showOnlyAvailable || course.isAvailable;
        return matchesLevel && matchesAvailability;
      });
    },
  },
  methods: {
    handleWishlistToggle(courseId) {
      if (this.wishlist.includes(courseId)) {
        this.wishlist = this.wishlist.filter((id) => id !== courseId);
      } else {
        this.wishlist.push(courseId);
      }
    },
  },
};
</script>

<style>
.navbar-brand {
  letter-spacing: 0.5px;
}
</style>
