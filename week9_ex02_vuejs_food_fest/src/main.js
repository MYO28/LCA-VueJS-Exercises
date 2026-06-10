const { createApp } = Vue;

createApp({
  data() {
    return {
      sortBy: "default",
      favorites: [],
      ticketTiers: [
        {
          id: "bronze",
          name: "Bronze Tier",
          price: 250,
          description: "Perfect for casual foodies looking to explore the market atmosphere.",
          isFeatured: false,
          benefits: [
            "General access to festival grounds",
            "Access to standard food trucks & stalls",
            "Complimentary festival map & guide",
            "Access to open-lawn music stages",
          ],
        },
        {
          id: "silver",
          name: "Silver Tier",
          price: 550,
          description: "Our standard package featuring entry drink vouchers and dedicated seating.",
          isFeatured: true,
          benefits: [
            "All Bronze Tier benefits included",
            "3x Complimentary craft beer/wine tastings",
            "Access to covered shade seating areas",
            "10% discount on official merchandise",
          ],
        },
        {
          id: "gold",
          name: "Gold Tier",
          price: 1200,
          description: "The ultimate culinary VIP experience with chef-table privileges.",
          isFeatured: false,
          benefits: [
            "All Silver Tier benefits included",
            "Priority fast-track festival lanes",
            "Access to the Private Masterclass VIP Lounge",
            "Exclusive 4-course sample pairing by master chefs",
            "Complimentary premium parking voucher",
          ],
        },
      ],
    };
  },
  computed: {
    sortedTiers() {
      // Create a shallow copy array to avoid changing core reference ordering directly
      const tiersCopy = [...this.ticketTiers];
      if (this.sortBy === "low-high") {
        return tiersCopy.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === "high-low") {
        return tiersCopy.sort((a, b) => b.price - a.price);
      }
      return tiersCopy;
    },
  },
  methods: {
    toggleFavorite(tierId) {
      if (this.favorites.includes(tierId)) {
        this.favorites = this.favorites.filter((id) => id !== tierId);
      } else {
        this.favorites.push(tierId);
      }
    },
    formatPrice(value) {
      return new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
        minimumFractionDigits: 0,
      }).format(value);
    },
    triggerCTA(tierName) {
      alert(`Thank you for your interest in the ${tierName}! We will send you an alert as soon as sales open up.`);
    },
  },
}).mount("#app");
