<script setup>
  definePageMeta({
    layout: 'dynamic',
  })

  useHead({
    title: '- Treatments',
  })

  const store = useStore().value
  const { treatments, treatmentNames } = store
  const route = useRoute()
  const routeQuery = ref('')
  const activeTreatment = ref(0)

  // Update active treatment
  function updateActiveTreatment() {
    if (route.query.treatment) {
      routeQuery.value = route.query.treatment

      // replace hyphen with space from query
      const queryToString = computed(() => routeQuery.value.replace(/-/g, ' '))

      // Return index of treatment matching query
      const indexOfQuery = treatments.findIndex(
        (treatment) => treatment.name.toLowerCase() === queryToString.value
      )

      // Update active treatment
      activeTreatment.value = indexOfQuery
    }
  }

  // update activeTreatment with emitted value
  function updateSelected(event) {
    activeTreatment.value = event
  }

  // if route.query changes call function
  watch(
    () => route.query,
    () => updateActiveTreatment()
  )

  // When component mounts call function
  onMounted(() => updateActiveTreatment())
</script>

<template>
  <div class="container mx-auto mt-16 max-w-5xl space-y-12 pb-8">
    <div>
      <img
        class="aspect-square h-96 w-full rounded-base object-cover md:aspect-video"
        src="/images/aromatherapy.jpg"
        alt="aromatherapist adding essential oils to hands"
        width="1000"
        height="390"
      />
    </div>
    <main>
      <section class="space-y-8 md:space-y-12">
        <h1 class="text-center text-5xl">Our Treatments</h1>

        <treatmentSelect
          class="md:hidden"
          :treatment-names="treatmentNames"
          @selected="updateSelected"
        />

        <treatmentList
          :treatment-names="treatmentNames"
          :active-treatment="activeTreatment"
          @update:selected="updateSelected"
        />

        <treatmentDetails :treatment="treatments[activeTreatment]" />
      </section>
    </main>
  </div>
</template>
