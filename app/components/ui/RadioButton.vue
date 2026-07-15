<script setup lang="ts">
const model = defineModel<string>();

const { value, title, description } = defineProps<{
  value: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <label :class="['radio-card', { 'is-checked': model === value }]">
    <div class="radio-input-wrapper">
      <input v-model="model" type="radio" :value="value" class="radio-input" />
      <span class="custom-radio"></span>
    </div>
    <div class="radio-content">
      <span class="radio-title">{{ title }}</span>
      <span v-if="description" class="radio-desc">{{ description }}</span>
    </div>
  </label>
</template>

<style scoped>
.radio-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid var(--outline-variant);
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    background-color 0.2s;
  box-sizing: border-box;
  width: 100%;
}

.radio-card:hover {
  border-color: var(--primary);
}

.radio-card.is-checked {
  border-color: var(--primary);
  background-color: rgba(0, 106, 99, 0.02);
}

.radio-input-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  flex-shrink: 0;
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 2;
}

.custom-radio {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--outline-variant);
  border-radius: 50%;
  background-color: #ffffff;
  box-sizing: border-box;
  transition: border-color 0.2s;
  z-index: 1;
}

.radio-input:checked + .custom-radio {
  border-color: var(--primary);
}

.custom-radio::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primary);
  transition: transform 0.2s;
}

.radio-input:checked + .custom-radio::before {
  transform: translate(-50%, -50%) scale(1);
}

.radio-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.radio-title {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--on-surface);
  line-height: 1.4;
}

.radio-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  color: var(--secondary);
  line-height: 1.4;
}
</style>
