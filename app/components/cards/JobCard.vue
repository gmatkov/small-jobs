<script setup lang="ts">
const { job } = defineProps<{
  job: any;
}>();
</script>

<template>
  <div class="job-card">
    <div class="card-top">
      <div>
        <p v-if="job.clientName" class="client-info">
          <span class="client-name">{{ job.clientName }}</span>
        </p>
        <p class="time-stamp">Prije 1 sat</p>
      </div>
      <div>
        <p v-if="job.price?.amount" class="price-badge" title="Fiksno">
          <span class="price-text"
            >{{ job.price.amount }}€/{{ job.price.unit }}</span
          >
        </p>
        <p v-if="job.frequency" class="frequency-text" title="Ponavljajuće">
          {{ job.frequency }}
        </p>
      </div>
    </div>

    <h3 class="job-title">
      <span v-if="job.title">{{ job.title }}</span>
    </h3>

    <p v-if="job.description" class="job-desc">
      {{ job.description }}
    </p>

    <div class="meta-info">
      <div class="meta-item">
        <img
          src="/icons/calendar_month_24.png"
          alt="Calendar Icon"
          class="meta-icon"
          width="14"
          height="14" />
        <span>{{ job.date }}</span>
      </div>
      <div class="meta-item">
        <img
          src="/icons/location_on_24.png"
          alt="Location Icon"
          class="meta-icon"
          width="14"
          height="14" />
        <span class="meta-text">Zagreb, Maksimir</span>
      </div>
    </div>

    <div class="card-bottom">
      <div class="action-icons">
        <img
          src="/icons/call_24.png"
          alt="Phone Icon"
          class="action-icon"
          width="14"
          height="14" />
        <img
          src="/icons/chat_bubble_24.png"
          alt="Chat Icon"
          class="action-icon"
          width="14"
          height="14" />
      </div>
      <span class="notice-text">Prijava potrebna za kontakt</span>
    </div>
  </div>
</template>

<style scoped>
.job-card {
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(226, 232, 240, 0.3);
  box-shadow: 0 12px 40px -15px rgba(0, 106, 99, 0.08);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-sizing: border-box;
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}
.client-info {
  margin: 0 0 4px 0;
}
.client-name {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}
.time-stamp {
  font-size: 0.875rem;
  color: #94a3b8;
  margin: 0;
}
.price-badge {
  background-color: #f0fdfa;
  padding: 4px 12px;
  border-radius: 9999px;
  text-align: center;
  margin: 0 0 4px 0;
}
.price-text {
  font-size: 0.875rem;
  color: #0d9489;
  font-weight: 600;
}
.frequency-text {
  font-size: 0.875rem;
  color: #64748b;
  text-align: center;
  margin: 0;
}
.job-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 24px 0;
  transition: color 0.2s;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.job-card:hover .job-title {
  color: #0d9489;
}
.job-desc {
  font-size: 0.875rem;
  color: #475569;
  margin: 4px 0 8px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.meta-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #475569;
}
.meta-icon {
  width: 16px;
  height: 16px;
}
.meta-text {
  font-size: 0.937rem;
}
.card-bottom {
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid rgba(226, 232, 240, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.6;
}
.action-icons {
  display: flex;
  gap: 16px;
}
.action-icon {
  width: 16px;
  height: 16px;
}
.notice-text {
  font-size: 0.875rem;
  color: #94a3b8;
  font-style: italic;
}
</style>
