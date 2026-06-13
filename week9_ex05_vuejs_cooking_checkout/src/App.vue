<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Cooking Masterclass Shopping Cart</h1>
    </header>

    <main class="app-layout">
      <CourseCatalog :courses="courses" @add-to-cart="handleAddToCart" />
      <CartPanel :cart="cart" @remove-from-cart="handleRemoveFromCart" />
    </main>
  </div>
</template>

<script>
import CourseCatalog from "./components/CourseCatalog.vue";
import CartPanel from "./components/CartPanel.vue";

export default {
  name: "App",
  components: {
    CourseCatalog,
    CartPanel,
  },
  data() {
    return {
      courses: [
        { id: 1, title: "Basic Cooking Techniques", price: 1450, stock: 5 },
        { id: 2, title: "Advanced Baking Basics", price: 2200, stock: 3 },
      ],
      cart: [],
    };
  },
  methods: {
    handleAddToCart(course) {
      const targetCourse = this.courses.find((c) => c.id === course.id);

      if (targetCourse && targetCourse.stock > 0) {
        targetCourse.stock -= 1;

        const cartItem = this.cart.find((item) => item.id === course.id);
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          this.cart.push({ ...course, quantity: 1 });
        }
      }
    },
    handleRemoveFromCart(index) {
      const item = this.cart[index];
      const targetCourse = this.courses.find((c) => c.id === item.id);

      if (targetCourse) {
        targetCourse.stock += item.quantity;
      }
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style>
body {
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  background-color: #f9fafb;
  color: #1f2937;
  line-height: 1.6;
  margin: 0;
  padding: 2rem;
}

.app-container {
  max-width: 1100px;
  margin: 0 auto;
}

.app-header {
  margin-bottom: 3rem;
  text-align: left;
}

.app-header h1 {
  font-size: 2.25rem;
  color: #111827;
  font-weight: 700;
  margin: 0;
}

.app-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .app-layout {
    grid-template-columns: 1fr;
  }
}
</style>
