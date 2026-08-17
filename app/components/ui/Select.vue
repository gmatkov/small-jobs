<script setup lang="ts">
interface SelectOption {
  value: string;
  label: string;
}

const model = defineModel<string>();

const {
  name,
  label,
  options,
  defaultOption = 'Odaberi...',
  disabled = false,
  error,
} = defineProps<{
  name: string;
  label?: string;
  options: SelectOption[];
  defaultOption?: string;
  disabled?: boolean;
  error?: string;
}>();
</script>

<template>
  <div class="select-container">
    <label v-if="label" :for="name" class="select-label">
      {{ label }}
    </label>

    <select
      :id="name"
      v-model="model"
      :name="name"
      :disabled="disabled"
      :class="{ 'is-invalid': error }"
      class="select-field">
      <option value="" disabled>
        {{ defaultOption }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <span v-if="error" class="error-text">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>
.select-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
}

.select-label {
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  color: var(--secondary);
  display: block;
}

.select-field {
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
  cursor: pointer;
}

.select-field:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(77, 182, 172, 0.1);
}

.select-field:disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: rgba(226, 232, 240, 0.5);
  opacity: 0.5;
}

.select-field.is-invalid {
  border-color: var(--error);
}

.select-field.is-invalid:focus {
  box-shadow: 0 0 0 4px rgba(186, 26, 26, 0.1);
}

.error-text {
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: var(--error);
}
</style>
