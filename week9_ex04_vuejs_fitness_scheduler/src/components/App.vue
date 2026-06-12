<template>
  <div class="layout">
    <nav class="navbar">
      <div class="nav-content">
        <strong>FlexZone Fitness</strong>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}
.navbar {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
}
.nav-content {
  max-width: 800px;
  margin: 0 auto;
}
</style>
