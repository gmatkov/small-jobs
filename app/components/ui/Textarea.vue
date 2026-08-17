<script setup lang="ts">
// import { useField } from 'vee-validate';
const model = defineModel<string>();

const {
  name,
  label,
  placeholder,
  rows = 5,
} = defineProps<{
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number | string;
  error?: string;
}>();
</script>

<template>
  <div class="textarea-container">
    <label v-if="label" :for="name" class="textarea-label">
      {{ label }}
    </label>

    <textarea
      v-model="model"
      :id="name"
      :placeholder="placeholder"
      :rows="rows"
      :class="['textarea-field', { 'is-invalid': error }]" />

    <span v-if="error" class="error-text">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.textarea-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
}

.textarea-label {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: var(--secondary);
  display: block;
}

.textarea-field {
  width: 100%;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid var(--outline-variant);
  border-radius: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  color: var(--on-background);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  box-sizing: border-box;
  resize: none;
}

.textarea-field::placeholder {
  color: #a1a1a1;
}

.textarea-field:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(77, 182, 172, 0.1);
}

.textarea-field.is-invalid {
  border-color: var(--error);
}

.textarea-field.is-invalid:focus {
  box-shadow: 0 0 0 4px rgba(186, 26, 26, 0.1);
}

.error-text {
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: var(--error);
}
</style>
