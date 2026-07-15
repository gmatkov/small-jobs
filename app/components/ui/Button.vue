<script setup lang="ts">
const {
  type = 'button',
  variant = 'primary',
  disabled = false,
} = defineProps<{
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['ui-button', `btn-${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.ui-button {
  width: 100%;
  height: 56px;
  padding: 0 32px;
  border-radius: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition:
    background-color 0.2s,
    transform 0.1s,
    box-shadow 0.2s;
  border: none;
}

.ui-button:active {
  transform: scale(0.98);
}

.ui-button:disabled {
  pointer-events: none;
  cursor: not-allowed;
  background-color: rgba(226, 232, 240, 0.5);
  color: #94a3b8;
  box-shadow: none;
}

.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #00504a;
}

.btn-secondary {
  background-color: #ffffff;
  color: var(--primary);
  border: 1px solid var(--outline-variant);
}

.btn-secondary:hover {
  background-color: #f8fafc;
}

@media (min-width: 768px) {
  .ui-button {
    width: auto;
  }
}
</style>
