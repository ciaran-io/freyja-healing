<script setup>
  definePageMeta({
    layout: 'dynamic',
  })

  useHead({
    title: '- Contact us',
    meta: [
      {
        name: 'description',
        content:
          'Get in touch anytime, you can find our contact information & contact form ',
      },
    ],
  })

  const store = useStore().value
  const { contactInformation, treatmentNames } = store
  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    treatment: '',
    message: '',
  }
  const formDataName = ref('')
  const isActiveComponent = ref(true)

  function updateFormDataName({ formDetails }) {
    console.log(formDetails)
    formDataName.value = formDetails.firstName
  }
</script>

<template>
  <div
    class="container relative mx-auto my-24 min-h-[1050px] max-w-5xl space-y-16"
  >
    <section class="information-card relative space-y-4 text-center">
      <h1 class="text-lg font-bold">Contact us</h1>
      <h2>
        Any questions? <br />
        Just write us a message
      </h2>
    </section>

    <section
      class="text-theme-gray-600 relative flex justify-center gap-x-32 font-medium"
    >
      <!-- show contact information on click -->
      <button
        :class="{ 'button-active': isActiveComponent }"
        @click="isActiveComponent = true"
      >
        Contact
      </button>

      <!-- show form on click -->
      <button
        :class="{ 'button-active': !isActiveComponent }"
        @click="isActiveComponent = !true"
      >
        Write to us
      </button>
    </section>

    <div class="relative">
      <Transition
        name="fade"
        mode="out-in"
      >
        <!-- Contact information  -->
        <ContactInfoCard
          v-show="isActiveComponent"
          :contact-information="contactInformation"
        />
      </Transition>

      <!-- Contact form hidden on page load  -->
      <Transition
        name="fade"
        mode="out-in"
      >
        <ContactForm
          v-show="!isActiveComponent"
          :form-data="formData"
          :treatment-names="treatmentNames"
          :form-data-name="formDataName"
          @form-data="updateFormDataName"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .button-active {
    @apply underline
    decoration-theme-slate
    underline-offset-4;
  }
  /* vue transition component */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.7s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
