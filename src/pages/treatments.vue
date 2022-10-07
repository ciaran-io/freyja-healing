<script setup>
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

      // Update displayed treatment
      activeTreatment.value = indexOfQuery
    }
  }

  // update activeTreatment with emitted value
  function updateSelected(event) {
    activeTreatment.value = event
  }

  // if route.query changes update treatment displayed
  watch(
    () => route.query,
    () => updateActiveTreatment()
  )

  // When component mounts to DOM updated treatment shown
  onMounted(() => updateActiveTreatment())
</script>

<template>
  <div class="container mx-auto mt-16 mb-32 space-y-12 lg:max-w-screen-lg">
    <div>
      <!-- Treatment image -->
      <nuxt-img
        src="/images/aromatherapy.jpg"
        alt="aromatherapist adding essential oils to hands"
        class="h-[400px] w-full rounded-base object-cover"
        sizes="sm:640px md:100vw lg:976px"
        width="976"
        height="400"
        quality="85"
        format="webp"
      />
    </div>

    <main>
      <section class="space-y-8 md:space-y-12">
        <h1 class="text-center text-5xl">Our Treatments</h1>
        <!-- Treatment select options (mobile only) -->
        <treatmentSelect
          class="md:hidden"
          :treatment-names="treatmentNames"
          @selected="updateSelected"
        />
        <!-- Treatment select options (on larger devices) -->
        <treatmentList
          :treatment-names="treatmentNames"
          :active-treatment="activeTreatment"
          @update:selected="updateSelected"
        />
        <!-- Treatment details -->
        <treatmentDetails :treatment="treatments[activeTreatment]" />
      </section>
    </main>
  </div>
</template>
