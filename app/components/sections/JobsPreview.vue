<script setup lang="ts">
const { data: jobs } = await useFetch('/api/jobs');
</script>

<template>
  <section class="jobs-section">
    <div class="jobs-header">
      <h2 class="jobs-title">Aktualni poslovi</h2>
      <p class="jobs-subtitle">
        Pogledajte tko sve traži vaše usluge. Pronađite idealan klijent u vašoj
        blizini i počnite planirati svoj tjedan.
      </p>
    </div>

    <div class="jobs-grid">
      <CardsJobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </section>
</template>

<style scoped>
.jobs-section {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 80px auto;
  padding: 0 16px;
  box-sizing: border-box;
}

.jobs-header {
  text-align: center;
  margin-bottom: 64px;
}

.jobs-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.jobs-subtitle {
  font-size: 1.125rem;
  color: #475569;
  max-width: 672px;
  margin: 0 auto;
  line-height: 1.5;
}

.jobs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 48px;
  position: relative;
}

@media (min-width: 768px) {
  .jobs-section {
    padding: 0 24px;
  }

  .jobs-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .jobs-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
