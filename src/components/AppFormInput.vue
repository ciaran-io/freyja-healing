// TODO: (Enhancement) Add input validation text beneath input on error
<script setup>
  defineEmits(['update:modelValue'])

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: true,
      default: 'text',
    },
    pattern: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
  })
  // Replace all label underscore with empty space
  const labelValue = computed(() => props.label.replace('_', ' '))
  const isFocused = ref(false)
</script>

<template>
  <div class="relative">
    <!-- Base Input & label used throughout application in forms -->
    <label :for="label"> {{ labelValue }} </label>
    <input
      :id="label"
      :type="type"
      :pattern="pattern"
      :required="required"
      :value="modelValue"
      :title="title"
      @focus="isFocused = true"
      @focusout="$event.target.value ? (isFocused = true) : (isFocused = false)"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span
      aria-hidden="true"
      class="pointer-events-none absolute top-3 left-3 bg-theme-gray text-sm capitalize transition-[top]"
      :class="{ '-top-3 left-2 px-3 font-medium': isFocused }"
    >
      {{ labelValue }}
    </span>
  </div>
</template>

<style scoped>
  /* replace input autofill color with shadow */
  /* from https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px hsl(47, 10%, 83%) inset !important;
    -webkit-box-shadow: 0 0 0 30px hsl(47, 10%, 83%) inset !important;
  }
</style>
