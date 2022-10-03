<script setup>
  useHead({
    title: '- Health & vitality',
    meta: [
      {
        name: 'keywords',
        content:
          'aromatherapy reflexology acupuncture reiki naturopathy healing',
      },
      {
        name: 'description',
        content:
          'Freyja healing offers a range of naturopathic or natural health treatments such as acupuncture, reiki and reflexology. Book your treatment today and begin your journey to better health.  ',
      },
    ],
  })

  const store = useStore().value
  const { treatments, treatmentUrl, conditions, reviews } = store
  const conditionIcons = [
    'material-symbols:hotel-outline-rounded',
    'material-symbols:self-improvement',
    'material-symbols:front-hand',
    'fa6-solid:brain',
  ]
</script>

<template>
  <div>
    <section class="container mx-auto mt-20 space-y-16 md:mt-44 md:w-max">
      <div class="container-heading">
        <h1 class="text-7xl">
          Fréyja healing
          <Icon
            aria-label=" Fréyja healing logo icon"
            class="!hidden h-10 w-10 sm:!inline-block sm:!align-bottom"
            name="ic:outline-spa"
          />
        </h1>
        <h2 class="text-3xl">
          The essence of health and vitality in one place
        </h2>
      </div>

      <div
        class="flex flex-wrap gap-y-6 sm:flex-nowrap sm:items-center sm:gap-x-4 md:gap-y-0"
      >
        <AppButtonLink
          class="button-rounded-hero button-padding-hero text-lg"
          text="About us"
          page-link="/about-us"
        />

        <span class="hero-span"></span>

        <AppButtonLink
          class="button-rounded-hero button-padding-hero text-lg"
          text="Our treatments"
          page-link="/treatments"
        />
      </div>
    </section>

    <main
      class="container mx-auto mb-60 mt-64 [&_:not(:first-child)_h2]:text-5xl"
    >
      <!-- conditions section -->
      <section>
        <h2
          class="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-600/70 bg-clip-text text-4xl font-medium text-transparent lg:text-6xl"
        >
          The healing effect of Reflexology<br />
          on your mind & body
        </h2>

        <div
          class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6 md:gap-14"
        >
          <information-card
            v-for="(condition, index) in conditions"
            :key="condition.id"
            :heading="condition.title"
            :description="condition.description"
            :icon="`${conditionIcons[index]}`"
          >
          </information-card>
        </div>
      </section>

      <!-- experience section -->
      <section>
        <h2>Experience & knowledge gained over 4 years</h2>
        <div class="md:gap-x-8 lg:flex">
          <div>
            <img
              class="rounded-xl"
              src="/images/treatment.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div
            class="mt-6 h-fit space-y-4 rounded-md bg-theme-base-100 p-4 shadow-primary lg:max-w-md"
          >
            <p class="text-lg first-letter:text-5xl">
              With over 4 years of experience and knowledge, in Aromatherapy,
              Reflexology & Reiki we can help you find the right treatment for
              your needs. We believe in treating the individuals body, mind &
              spirit.
            </p>
            <app-button-link
              page-link="about-us"
              text="About us"
            />
          </div>
        </div>
      </section>

      <!-- treatments section -->
      <section>
        <h2>Book an appointment</h2>
        <booking-card
          :treatments="treatments"
          :treatment-url="treatmentUrl"
        ></booking-card>
      </section>

      <!-- reviews section -->
      <section
        class="reviews"
        aria-label="client testimonials"
      >
        <h2>What our clients say</h2>
        <div
          class="grid snap-x grid-flow-col gap-x-6 overflow-x-auto rounded-3xl bg-theme-gray pt-8 pb-12 pl-6 shadow-primary md:rounded-3xl md:px-6"
        >
          <lazy-information-card
            v-for="review in reviews"
            :key="review.id"
            class="min-h-[350px] min-w-max snap-center lg:min-w-full"
            :heading="review.treatment"
            :description="review.review"
            :is-review="true"
            icon="material-symbols:rate-review"
          >
            <template #reviewName>
              <div class="inline-block pr-2 text-lg font-medium capitalize">
                {{ review.name }}
              </div>
            </template>
          </lazy-information-card>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="postcss">
  .container-heading {
    @apply relative
      space-y-6;

    @screen md {
      @apply pl-2;

      &::before {
        @apply absolute 
        -left-1
        block
        h-full
        w-[0.5px]
        bg-theme-gray
        content-[''];
      }
    }
  }

  .hero-span {
    @apply relative hidden   
    h-[2px]
       -rotate-45
        rounded-base
        bg-theme-slate-100
        px-5 
        content-['']
        md:block;
  }

  main > section {
    /* main sections direct children  */
    @apply mt-48;

    /* main sections direct children div, h2 */
    > h2,
    > div {
      @apply relative;
    }

    h2 {
      @apply text-center;
    }

    /* main sections direct h2 child adjacent div */
    > h2 + div {
      @apply mt-16;
    }

    /* main; every second section   */
    &:nth-of-type(2n) {
      h2 {
        @apply pt-12;
      }

      &::before {
        @apply absolute  
        left-0
        z-0
        h-[30rem]
        w-full
        bg-gray-100/20 
        content-[''] 
        md:w-[90%] 
        md:rounded-tr-xl 
        md:rounded-br-xl;
      }
    }
  }
  .reviews {
    h3 {
      @apply capitalize;
    }
    svg {
      @apply h-6 w-6;
    }
  }
</style>
