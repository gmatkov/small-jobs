<template>
  <div class="page-content">
    <SectionsHero />
    <SectionsTrustBar />
    <SectionsJobsPreview />
  </div>
</template>

<style scoped>
.page-content {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
  font-size: 1rem;
  color: #0f172a;
}

@media (max-width: 640px) {
  .page-content {
    padding: 0 16px;
  }
}
</style>
