<script setup>
  const emit = defineEmits(['formData'])
  const props = defineProps({
    formData: {
      type: Object,
      required: true,
    },
    treatmentNames: {
      type: Object,
      required: true,
    },
    formDataName: {
      type: String,
      required: false,
      default: '',
    },
  })

  const formDataCopy = ref({ ...props.formData })
  const formSubmitting = ref(false)
  const isSuccessMessage = ref(true)
  const form = ref(null)

  // emit formData
  function emitForm() {
    emit('formData', { formDetails: formDataCopy.value })
    formFeedback()

    new Promise((resolve) => {
      // reset from after 4s
      setTimeout(() => resolve(resetFrom()), 4000)
    })
  }

  function formFeedback() {
    formSubmitting.value = true

    setTimeout(() => {
      formSubmitting.value = false
    }, 2500)
  }

  function resetFrom() {
    // reset form inputs
    for (const data in formDataCopy.value) {
      formDataCopy.value[data] = ''
    }
    // reset select value
    form.value.elements.namedItem('treatments').selectedIndex = 0
    // Show success message to user
    isSuccessMessage.value = false
  }

  // update formData with selected treatment
  function updateSelected(selected) {
    formDataCopy.value.treatment = [...props.treatmentNames][selected - 1]
  }
</script>

<template>
  <ContactContainer heading="Write to us">
    <form
      ref="form"
      class="mx-auto max-w-3xl space-y-8"
      @submit.prevent="emitForm()"
    >
      <!-- user details  -->
      <AppFormInput
        v-model="formDataCopy.firstName"
        label="first_name"
        type="text"
        pattern="[a-zA-Z]{2,10}"
        class="md:inline-block md:w-1/2 md:pr-6"
        :required="true"
      />

      <AppFormInput
        v-model="formDataCopy.lastName"
        label="last_name"
        type="text"
        pattern="[a-zA-Z]{2,20}"
        class="md:inline-block md:w-1/2"
        :required="true"
      />

      <!-- pattern from
        https://www.w3schools.com/tags/att_input_pattern.asp -->
      <AppFormInput
        v-model="formDataCopy.email"
        label="email"
        type="email"
        pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$"
        :required="true"
      />

      <!-- Treatments -->
      <TreatmentSelect
        :treatment-names="treatmentNames"
        @selected="updateSelected"
      />

      <!-- message -->
      <div>
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="formDataCopy.message"
          type="text"
          required
          placeholder="Your message.."
          rows="10"
        />
      </div>

      <AppButton
        type="submit"
        :text="formSubmitting ? 'submitting...' : 'submit'"
        class="mb-2 bg-theme-base-200 text-xl"
      >
        <template #icon>
          <Icon
            v-show="formSubmitting"
            class="ml-2 h-5 w-5 animate-spin"
            name="icon-park-outline:loading-four"
          />
        </template>
      </AppButton>

      <AppTransition :is-hidden="isSuccessMessage">
        <p class="text-center">
          Thank you {{ formDataName }}, your message was successfully sent!
        </p>
      </AppTransition>
    </form>
  </ContactContainer>
</template>
