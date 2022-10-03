<script setup>
  definePageMeta({
    layout: 'booking',
  })

  useHead({
    title: '- Booking',
  })

  const { booking } = useRoute().query
  const { treatments } = useStore().value
  const queryToString = computed(() => booking.replace(/-/g, ' '))
  const bookingByQuery = treatments.find(
    (treatment) => treatment.name.toLowerCase() === queryToString.value
  )

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const monthsInYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const bookingDetails = ref({
    name: '',
    email: '',
    contactNumber: '',
    dateSelected: '',
    appointmentTime: '09:00',
  })
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  const date = new Date()
  const [currentMonth, currentYear] = [date.getMonth(), date.getFullYear()]
  const calendarYear = ref(currentYear)
  const calendarMonth = ref(currentMonth)
  const daysInMonth = ref(null)
  const calendarEnd = 2023

  const monthSelected = ref('')
  const dateInMonthSelected = ref(null)
  const yearSelected = ref(null)

  const isNextEnabled = ref(false)
  const isPreviousEnabled = ref(true)
  const activeComponent = ref(0)
  const errorMessage = ref(false)
  const form = ref(null)
  const formSubmitting = ref(false)
  const formSubmittedMessage = ref(false)

  function viewNextMonth() {
    getDaysInMonth(calendarYear.value, calendarMonth.value)
    calendarMonth.value++
    if (calendarMonth.value >= 12) {
      calendarMonth.value = 0
      calendarYear.value += 1
    }
    disableDate()
  }

  function viewPreviousMonth() {
    getDaysInMonth(calendarYear.value, calendarMonth.value)
    calendarMonth.value--
    if (calendarMonth.value <= 1) {
      calendarMonth.value = 12
      calendarYear.value -= 1
    }
    disableDate()
  }

  function userSelectDate(event) {
    monthSelected.value = monthsInYear[calendarMonth.value]
    dateInMonthSelected.value = event.target.textContent
    yearSelected.value = calendarYear.value

    bookingDetails.value.dateSelected = new Date(
      `${calendarYear.value}-${calendarMonth.value + 1}-${
        event.target.textContent
      }`
    ).toDateString()
  }

  function disableDate() {
    if (
      calendarMonth.value <= currentMonth &&
      calendarYear.value === currentYear
    ) {
      isPreviousEnabled.value = true
    } else {
      isPreviousEnabled.value = false
    }

    if (calendarYear.value === calendarEnd && calendarMonth.value === 11) {
      isNextEnabled.value = true
    } else {
      isNextEnabled.value = false
    }
  }

  function getDaysInMonth(currentYear, currentMonth) {
    return (daysInMonth.value = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate())
  }

  function checkValidDetails() {
    const inputs = form.value.querySelectorAll('input')

    // check if user entered name, email number
    if (activeComponent.value === 0) {
      inputs.forEach((input) => {
        if (input.validity.valid === false) {
          errorMessage.value = true
        } else {
          errorMessage.value = false
          activeComponent.value = 1
        }
      })
    }

    // check if user selected date
    if (activeComponent.value === 1) {
      if (bookingDetails.value.dateSelected.length === 0) {
        errorMessage.value = true
      } else {
        errorMessage.value = false
        activeComponent.value++
      }
    }
  }

  // provide confirmation message
  // navigate back to homepage
  function formSubmitFeedback() {
    formSubmitting.value = true

    setTimeout(() => {
      formSubmitting.value = false
      formSubmittedMessage.value = true
    }, 2000)

    setTimeout(async () => {
      await navigateTo('/')
    }, 6000)
  }
  onMounted(() => getDaysInMonth(currentYear, currentMonth))
</script>

<template>
  <div class="container mx-auto mt-24 space-y-11 lg:max-w-5xl">
    <div class="information-card space-y-12 py-8 px-12">
      <h1 class="text-center text-3xl">Booking</h1>
      <!-- Booking steps counter -->
      <div class="flex w-full justify-evenly">
        <div
          v-for="(i, index) in 3"
          :key="index"
          class="rounded-full px-4 py-2 shadow"
          :class="{ 'bg-theme-base  ': activeComponent === index }"
        >
          {{ i }}
        </div>
      </div>

      <!-- Booking treatment + user details form -->
      <div class="information-card min-h-[775px]">
        <div
          v-show="activeComponent === 0"
          class="grid gap-y-6 rounded-base p-8 lg:grid-cols-[1fr,1fr] lg:gap-y-0 lg:gap-x-12"
        >
          <!-- booking name -->

          <form
            ref="form"
            class="space-y-6"
          >
            <div>
              <TheFormInput
                v-model="bookingDetails.name"
                label="name"
                :required="true"
                type="text"
                pattern="[a-zA-Z]{2,20}"
              />
            </div>
            <!-- booking telephone -->
            <div>
              <TheFormInput
                v-model="bookingDetails.contactNumber"
                label="phone"
                :required="true"
                type="tel"
                pattern="[0-9]{5,10}"
              />
            </div>
            <!-- booking email -->
            <div>
              <TheFormInput
                v-model="bookingDetails.email"
                label="email"
                :required="true"
                type="email"
                pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$"
              />
            </div>

            <p
              v-if="errorMessage"
              class="text-red-500"
            >
              Please enter valid name, phone number & email
            </p>
          </form>

          <!-- Booking treatment details -->
          <div class="row-start-1 space-y-6 lg:row-start-auto">
            <div>
              <img
                src="/images/massage.jpg"
                class="mx-auto h-64 w-full rounded-base object-cover"
                alt=""
              />
            </div>

            <div class="space-y-4 font-medium">
              <h2 class="text-4xl">
                {{ bookingByQuery.name }}
              </h2>
              <div class="text-xl">€{{ bookingByQuery.price }}</div>
              <div class="text-xl">
                Duration {{ bookingByQuery.duration }} hour
              </div>
            </div>

            <div class="space-y-6">
              <p class=" ">
                {{ bookingByQuery.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Booking schedular -->
        <div
          v-show="activeComponent === 1"
          class="space-y-16"
        >
          <h2 class="text-center text-2xl">Choose preferred date & time</h2>
          <div
            class="grid gap-y-8 md:grid-cols-[1fr,2fr] md:gap-y-0 md:gap-x-8 lg:grid-cols-[1fr,1fr]"
          >
            <div class="space-y-4">
              <div class="grid grid-cols-[auto,1fr,auto] items-center px-2">
                <button
                  :disabled="isPreviousEnabled"
                  aria-label="view previous months calender  "
                  class="disabled:text-gray-600/40"
                  @click="viewPreviousMonth"
                >
                  <Icon
                    class="h-6 w-6 text-inherit"
                    name="material-symbols:arrow-back-ios-rounded"
                  />
                </button>
                <div
                  class="text-center font-medium"
                  aria-label="current calender currentMonth and currentYear"
                >
                  {{ monthsInYear[calendarMonth] }}
                  {{ calendarYear }}
                </div>

                <button
                  aria-label="view next months calender "
                  :disabled="isNextEnabled"
                  class="disabled:text-gray-600/40"
                  @click="viewNextMonth"
                >
                  <Icon
                    class="h-6 w-6 text-inherit"
                    name="material-symbols:arrow-forward-ios"
                  />
                </button>
              </div>

              <!-- Calender days in month -->
              <div class="grid min-w-max grid-cols-7 gap-x-4 gap-y-3">
                <div
                  v-for="(day, index) in days"
                  :key="index"
                  class="text-center font-medium text-gray-500"
                >
                  {{ day }}
                </div>

                <!-- Select appointment day -->
                <div
                  v-for="day in daysInMonth"
                  :key="day"
                  aria-label="choose a date to book"
                  class="relative cursor-pointer px-1.5 py-1"
                  :class="{
                    'selected-date ':
                      day == dateInMonthSelected &&
                      monthsInYear[calendarMonth] == monthSelected &&
                      yearSelected == calendarYear,
                  }"
                  @click="userSelectDate($event)"
                >
                  <span class="relative z-10 block text-center">
                    {{ day }}
                  </span>
                </div>
              </div>
              <p
                v-if="errorMessage"
                class="text-red-500"
              >
                Please chose a date & time
              </p>
            </div>

            <!-- Select appointment time -->
            <div class="space-y-4">
              <input
                id="appointment_time"
                v-model="bookingDetails.appointmentTime"
                type="time"
                name="appointment_time"
                min="09:00"
                max="17:00"
              />
              <p>Opening hours Mon - Sat <br />9:00 - 5:00</p>
            </div>
          </div>
        </div>

        <!-- Booking Confirmation details -->
        <div
          v-show="activeComponent === 2"
          class="space-y-6"
        >
          <h2 class="text-center text-xl">Confirm details</h2>

          <ul
            v-if="!formSubmittedMessage"
            class="flex flex-col gap-y-4 [&_li]:border-b [&_li]:border-gray-400"
          >
            <li>Name: {{ bookingDetails.name }}</li>
            <li>
              Email:
              {{ bookingDetails.email }}
            </li>
            <li>
              Number:
              {{ bookingDetails.contactNumber }}
            </li>
            <li>
              Date:
              {{ bookingDetails.dateSelected }}
            </li>
            <li>
              Appointment Time:
              {{ bookingDetails.appointmentTime }}
            </li>
          </ul>

          <div
            v-else
            class="space-y-4"
          >
            <p>
              Thank you {{ bookingDetails.name }} we will contact you soon to
              confirm your booking. Have a nice day
            </p>

            <p>We will redirect you back to our homepage momentarily</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-x-8">
        <booking-button
          :active-component="activeComponent"
          text="Previous"
          :class="{ 'opacity-50 ': activeComponent === 0 }"
          :disabled="activeComponent === 0"
          @click="activeComponent--"
        />

        <booking-button
          v-if="activeComponent < 2"
          :active-component="activeComponent"
          text="Next"
          @click="checkValidDetails()"
        />

        <booking-button
          v-else
          :active-component="activeComponent"
          :text="formSubmitting ? 'submitting...' : 'submit'"
          @click="formSubmitFeedback()"
        >
          <template #icon>
            <Icon
              v-show="formSubmitting"
              class="ml-2 h-5 w-5 animate-spin"
              name="icon-park-outline:loading-four"
            />
          </template>
        </booking-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .selected-date::after {
    @apply absolute left-0 top-0 block h-full w-full rounded-full bg-theme-base-100 content-[''];
  }
</style>
