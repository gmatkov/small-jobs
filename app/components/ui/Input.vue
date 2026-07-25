<script setup lang="ts">
const model = defineModel<string>();

const {
  name,
  label,
  type = 'text',
  placeholder,
  disabled = false,
} = defineProps<{
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}>();
</script>

<template>
  <div class="input-container">
    <label v-if="label" :for="name" class="input-label">
      {{ label }}
    </label>

    <input
      v-model="model"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="input-field" />

    <span v-if="error" class="error-text">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
}

.input-label {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  color: var(--secondary);
  display: block;
}

.input-field {
  width: 100%;
  height: 56px;
  padding: 0 16px;
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
}

.input-field::placeholder {
  color: #a1a1a1;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(77, 182, 172, 0.1);
}

.input-field:disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: rgba(226, 232, 240, 0.5);
  opacity: 0.5;
}

.input-field.is-invalid {
  border-color: var(--error);
}

.input-field.is-invalid:focus {
  box-shadow: 0 0 0 4px rgba(186, 26, 26, 0.1);
}

.error-text {
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: var(--error);
}
</style>
