<template>
  <div class="cart-panel">
    <h2>Your Cart</h2>

    <div v-if="cart.length === 0" class="empty-message">Your cart is currently empty.</div>

    <div v-else>
      <ul class="cart-list">
        <li v-for="(item, index) in cart" :key="item.id" class="cart-item">
          <div class="item-details">
            <span class="item-title">{{ item.title }}</span>
            <span class="item-meta">Qty: {{ item.quantity }} × R {{ item.price.toFixed(2) }}</span>
          </div>
          <div class="item-actions">
            <span class="item-total">R {{ (item.price * item.quantity).toFixed(2) }}</span>
            <button class="remove-btn" @click="$emit('remove-from-cart', index)">Remove</button>
          </div>
        </li>
      </ul>

      <div class="cart-summary">
        <div class="summary-row">
          <span>Subtotal:</span>
          <span>R {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="summary-row">
          <span>VAT (15%):</span>
          <span>R {{ tax.toFixed(2) }}</span>
        </div>
        <div class="summary-row grand-total">
          <span>Total:</span>
          <span>R {{ grandTotal.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartPanel",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    subtotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    tax() {
      return this.subtotal * 0.15; // Represents 15% standard SA VAT
    },
    grandTotal() {
      return this.subtotal + this.tax;
    },
  },
};
</script>

<style scoped>
.cart-panel {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  align-self: start;
}

.cart-panel h2 {
  margin-top: 0;
  font-size: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
  color: #111827;
}

.empty-message {
  color: #6b7280;
  padding: 1.5rem 0;
  text-align: center;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-weight: 600;
  color: #374151;
}

.item-meta {
  font-size: 0.875rem;
  color: #6b7280;
}

.item-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.item-total {
  font-weight: 600;
}

.remove-btn {
  background: none;
  border: none;
  color: #dc2626;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
}

.remove-btn:hover {
  text-decoration: underline;
}

.cart-summary {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #4b5563;
}

.grand-total {
  font-weight: 700;
  font-size: 1.25rem;
  color: #111827;
  margin-top: 1rem;
  padding-top: 0.5rem;
}
</style>
