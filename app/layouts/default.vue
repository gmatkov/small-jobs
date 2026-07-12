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
</style>
