//TODO:(Refactor) booking steps into separate components. //TODO:(Enhancement)
Setup email confirmation for booking.
<script setup>
  definePageMeta({
    layout: 'booking',
  })

  useHead({
    title: '- Booking',
  })

  const { booking } = useRoute().query
  const { treatments } = useStore().value
  // Replace '-' for  space in query
  const queryToString = computed(() => booking.replace(/-/g, ' '))
  // Find first treatment that matches the query
  const bookingByQuery = treatments.find(
    (treatment) => treatment.name.toLowerCase() === queryToString.value
  )

  // Calender data
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

  const newDate = new Date()
  const [currentMonth, currentYear] = [
    newDate.getMonth(),
    newDate.getFullYear(),
  ]
  const calendarYear = ref(currentYear)
  const calendarMonth = ref(currentMonth)
  const dates = ref(null)
  const calendarEnd = 2023
  const selectedDate = ref(null)
  const calenderStartDate = ref(null)

  // Form data
  const bookingDetails = ref({
    name: '',
    email: '',
    contactNumber: '',
    dateSelected: '',
    appointmentTime: '09:00',
  })
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  const activeComponent = ref(0)
  const isNextEnabled = ref(true)
  const isPreviousEnabled = ref(false)

  const form = ref(null)
  const appointmentTime = ref(null)
  const formSubmitting = ref(false)
  const formSubmittedMessage = ref(false)
  const errorMessage = ref(false)
  const counter = ref(0)
  const countdownTime = ref(10)

  // return true if selectedDate == calendarDate
  const highlightCalendarDate = (date) => {
    if (selectedDate.value !== null)
      if (
        selectedDate.value.getMonth() === calendarMonth.value &&
        selectedDate.value.getDate() === date &&
        selectedDate.value.getFullYear() === calendarYear.value
      )
        return true
      else {
        return false
      }
  }

  // Calender mutations

  // Display next month in calendar
  function viewNextMonth() {
    getCalenderDates(calendarYear.value, calendarMonth.value) // Get next month dates
    calendarMonth.value++ // Increase calendar month
    SetCalendarStartDate()

    // Increment calendar year if calendarMonth is less than one
    if (calendarMonth.value >= 12) {
      calendarMonth.value = 0
      calendarYear.value++
    }
    // Prevent viewing dates in the calendar that are before current month of current year
    return calendarYear.value === calendarEnd && calendarMonth.value === 11
      ? (isNextEnabled.value = false)
      : ((isNextEnabled.value = true), (isPreviousEnabled.value = true))
  }

  // Display previous month in calendar
  function viewPreviousMonth() {
    getCalenderDates(calendarYear.value, calendarMonth.value)
    calendarMonth.value--
    SetCalendarStartDate()

    // Decrement calendar year if calendarMonth is less than one
    if (calendarMonth.value < 1) {
      calendarMonth.value = 11
      calendarYear.value--
    }

    // Prevent viewing dates in the calendar that have passed calendarEnd
    return calendarMonth.value <= currentMonth &&
      calendarYear.value === currentYear
      ? (isPreviousEnabled.value = false)
      : ((isPreviousEnabled.value = true), (isNextEnabled.value = true))
  }

  // update booking date selected details with selected date
  function updateSelectedDate(event) {
    selectedDate.value = bookingDetails.value.dateSelected = new Date(
      `${calendarYear.value}-${calendarMonth.value + 1}-${
        event.target.textContent
      }`
    )
    // convert selected date to portion of date
    bookingDetails.value.dateSelected =
      bookingDetails.value.dateSelected.toDateString()
  }

  // Return year & month based on input
  function getCalenderDates(currentYear, currentMonth) {
    return (dates.value = new Date(currentYear, currentMonth + 1, 0).getDate())
  }

  // Set calendar date for each month
  function SetCalendarStartDate() {
    return (calenderStartDate.value = new Date(
      calendarYear.value,
      calendarMonth.value,
      1
    ).getDay())
  }

  // Check form is valid
  // show errorMessage if invalid
  function validateUserInput() {
    return form.value.checkValidity()
      ? ((errorMessage.value = false), (activeComponent.value = 1))
      : (errorMessage.value = true)
  }

  // Check input date and time is valid
  // show errorMessage if invalid
  function validateUserDate() {
    return bookingDetails.value.dateSelected.length &&
      appointmentTime.value.validity.valid
      ? (errorMessage.value = false)
      : (errorMessage.value = true)
  }

  // Validate form inputs
  function checkValidDetails() {
    // Check form is valid
    if (activeComponent.value === 0) {
      validateUserInput()
    }

    if (activeComponent.value === 1) {
      counter.value++

      // Check time chosen is valid
      if (counter.value > 1) {
        validateUserDate()
        if (errorMessage.value === false) {
          activeComponent.value++
        }
      }
    }
  }

  function formCountdown() {
    setInterval(function () {
      if (countdownTime.value > 1) {
        countdownTime.value--
      }
    }, 1000)
  }

  // Send form
  // navigate back to homepage
  function formSubmitFeedback() {
    formSubmitting.value = true

    // Change from submitting button text
    // Set countdown
    // reset counter
    setTimeout(() => {
      formSubmitting.value = false
      formSubmittedMessage.value = true
      formCountdown()
      counter.value = 0
    }, 1500)

    // Navigate back to homepage after 11.5s ( countdownTime + setTimeout)
    setTimeout(() => navigateTo('/'), 11500)
  }
  // When dom loads, get calendar year & month
  // Update start of moth date on calendar
  onMounted(() => {
    getCalenderDates(currentYear, currentMonth), SetCalendarStartDate()
  })
</script>

<template>
  <div
    class="information-card mx-auto mt-12 space-y-8 lg:min-w-[64rem] lg:max-w-5xl"
  >
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
    <main class="information-card">
      <div
        v-show="activeComponent === 0"
        class="flex flex-col-reverse gap-y-12 gap-x-16 lg:grid lg:grid-cols-2"
      >
        <!-- booking name -->
        <form
          ref="form"
          class="space-y-6"
        >
          <div>
            <AppFormInput
              v-model="bookingDetails.name"
              label="name"
              :required="true"
              type="text"
              pattern="[a-zA-Z]{3,20}"
              title="Name must have at least 3 - 20 characters"
            />
          </div>

          <!-- booking telephone -->
          <div>
            <AppFormInput
              v-model="bookingDetails.contactNumber"
              label="phone"
              :required="true"
              type="tel"
              pattern="[0-9]{5,10}"
              title="Phone number must have at least 5 - 10 characters"
            />
          </div>

          <!-- booking email -->
          <div>
            <AppFormInput
              v-model="bookingDetails.email"
              label="email"
              :required="true"
              type="email"
              pattern="^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Example of valid email, email@gmail.com"
            />

            <!-- Error message -->
            <p
              v-show="errorMessage"
              class="pt-8 text-red-500"
            >
              Please enter valid name, phone number & email
            </p>
          </div>
        </form>

        <!-- Booking treatment details -->
        <div class="space-y-6">
          <div>
            <nuxt-img
              provider="cloudinary"
              src="/massage.jpg"
              alt="client receiving head massage in low lit room"
              class="mx-auto h-64 w-full rounded-base object-cover"
              width="420"
              height="256"
              :modifiers="{ f: 'auto', q: '85' }"
            />
          </div>

          <div class="space-y-4 font-medium">
            <h2 class="text-4xl">
              {{ bookingByQuery.name }}
            </h2>

            <div class="text-xl">
              Duration {{ bookingByQuery.duration }} hour
              <span aria-label="booking price"
                >€{{ bookingByQuery.price }}</span
              >
            </div>

            <p>
              {{ bookingByQuery.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Booking schedular / Calendar -->
      <div
        v-show="activeComponent === 1"
        class="space-y-12"
      >
        <h2 class="text-center text-2xl">Choose preferred date & time</h2>
        <div class="grid gap-y-8 md:grid-cols-[1fr,1fr] md:gap-y-0 md:gap-x-8">
          <div class="space-y-4">
            <div class="grid grid-cols-[auto,1fr,auto] items-center px-2">
              <!-- view previous calendar month -->
              <button
                :disabled="!isPreviousEnabled"
                aria-label="view previous months calender  "
                class="disabled:text-gray-600/40"
                @click="viewPreviousMonth"
              >
                <Icon
                  class="h-6 w-6 text-inherit"
                  name="material-symbols:arrow-back-ios-rounded"
                />
              </button>
              <!-- calendar month & year -->
              <div
                class="text-center font-medium"
                aria-label="current calender currentMonth and currentYear"
              >
                {{ monthsInYear[calendarMonth] }}
                {{ calendarYear }}
              </div>
              <!-- view next calendar month -->
              <button
                aria-label="view next months calender "
                :disabled="!isNextEnabled"
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
            <div class="grid grid-cols-7 gap-x-4 gap-y-3">
              <div
                v-for="(day, index) in days"
                :key="index"
                class="text-center font-medium text-gray-500"
              >
                {{ day }}
              </div>

              <!-- Select appointment date -->
              <div
                v-for="date in dates"
                :key="date"
                aria-label="choose a date to book"
                class="relative cursor-pointer"
                :class="{
                  'selected-date': highlightCalendarDate(date),
                  'grid-start': date === 1,
                }"
                @click="updateSelectedDate($event, date), validateUserDate()"
              >
                <span class="relative z-10 block text-center">
                  {{ date }}
                </span>
              </div>
            </div>
          </div>

          <!-- Select appointment time -->
          <div class="space-y-8">
            <input
              id="appointment_time"
              ref="appointmentTime"
              v-model="bookingDetails.appointmentTime"
              type="time"
              name="appointment_time"
              min="09:00"
              max="17:00"
              title="Enter a time between 9am and 5pm"
            />
            <p>Opening hours Mon - Sat <br />9:00 - 5:00</p>
            <!-- Error message -->
            <p
              v-if="errorMessage"
              class="text-red-500"
            >
              Please chose a valid date & time.
            </p>
          </div>
        </div>
      </div>

      <!-- Booking Confirmation details -->
      <div
        v-show="activeComponent === 2"
        class="space-y-6 pb-12 pt-4"
      >
        <h2 class="text-center text-xl">
          {{
            formSubmittedMessage && !formSubmitting
              ? 'Details sent'
              : 'Confirm details'
          }}
        </h2>

        <!-- User form details -->
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
            {{
              bookingDetails.appointmentTime.substring(0, 2) < 12
                ? bookingDetails.appointmentTime + ' AM'
                : bookingDetails.appointmentTime + ' PM'
            }}
          </li>
        </ul>

        <!-- booking thank you message + countdown to home page -->
        <div
          v-else
          class="space-y-4 text-center"
        >
          <p>
            Thank you {{ bookingDetails.name }} we will contact you soon to
            confirm your booking, Have a nice day.
          </p>

          <p>We will redirect you back to our homepage momentarily.</p>
          <div class="pt-6 text-xl">
            {{ countdownTime }}
          </div>
        </div>
      </div>
    </main>

    <!-- Next and previous buttons for booking -->
    <div
      v-if="!formSubmittedMessage"
      class="flex justify-center gap-x-8"
    >
      <!-- Previous button -->
      <booking-button
        :active-component="activeComponent"
        text="Previous"
        :class="{ 'opacity-50 ': activeComponent === 0 }"
        :disabled="activeComponent === 0"
        @click="activeComponent--"
      />

      <!-- Next button -->
      <booking-button
        v-if="activeComponent < 2"
        :active-component="activeComponent"
        text="Next"
        @click="checkValidDetails()"
      />

      <!-- Submit button -->
      <booking-button
        v-else
        class="min-w-max"
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

    <!-- Submit message -->
    <div
      v-else
      class="button button-pill button-padding-sm bg-theme-base"
    >
      Success !
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .grid-start {
    grid-column-start: v-bind(calenderStartDate);
  }
  .selected-date::after {
    @apply absolute left-0 top-0 block h-full w-full rounded-full bg-theme-base-100 content-[''];
  }
</style>
