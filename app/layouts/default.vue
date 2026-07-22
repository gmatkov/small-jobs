<template>
  <div class="app-layout">
    <LayoutsHeader />
    <main class="main-content">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  font-size: 1rem;
  color: #0f172a;
}

@media (max-width: 640px) {
  .main-content {
    padding: 0 16px;
  }
}
</style>
