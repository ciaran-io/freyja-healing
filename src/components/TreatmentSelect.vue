<script setup>
  defineEmits(['selected'])
  defineProps({
    treatmentNames: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div>
    <label for="treatments">treatments</label>
    <select
      id="treatments"
      name="treatments"
      class="bg-theme-gray capitalize"
      @change="$emit('selected', $event.target.selectedIndex)"
    >
      <option
        disabled
        selected
        value="none"
      >
        Choose a service
      </option>
      <option
        v-for="(names, index) in treatmentNames"
        :key="index"
        :value="names"
        class="capitalize"
      >
        {{ names }}
      </option>
    </select>
  </div>
</template>
