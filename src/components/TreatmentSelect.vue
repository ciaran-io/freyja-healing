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
    <!-- Update / emit on selected option -->
    <select
      id="treatments"
      name="treatments"
      class="bg-theme-gray capitalize"
      @change="$emit('selected', $event.target.selectedIndex - 1)"
    >
      <!-- default select option -->
      <option
        disabled
        selected
        value="none"
      >
        Choose a service
      </option>
      <!-- treatment options -->
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
