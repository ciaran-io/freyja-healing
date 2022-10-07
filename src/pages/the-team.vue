<script setup>
  useHead({
    title: '- The team',
  })

  const store = useStore().value
  const { teamMembers } = store
  const teamImage = ['laura', 'sarah', 'alex']
</script>

<template>
  <div class="container mx-auto mt-24 mb-32">
    <div class="mb-16 space-y-8 sm:mb-0">
      <h1 class="text-center text-6xl">The Team</h1>

      <main
        class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-12"
      >
        <div
          v-for="(member, index) in teamMembers"
          :key="member.id"
          class="information-card flex flex-col gap-y-6"
        >
          <!-- Team member image -->
          <nuxt-img
            :src="`/images/${teamImage[index]}.jpg`"
            :alt="`profile picture of ${member.name}`"
            format="webp"
            quality="80"
            class=" rounded-base object-cover lg:h-[360px]"
            height="330"
            width="590"
          />

          <!-- Team member name and role -->
          <div class="space-y-2 text-center">
            <h2
              aria-label="team members name"
              class="text-2xl"
            >
              {{ member.name }}
            </h2>
            <p
              aria-label="team member role"
              class="text-sm"
            >
              {{ member.role }}
            </p>
          </div>

          <!-- Team member treatments offered -->
          <ul
            :aria-label="`list of therapies offered by ${member.name}`"
            class="flex flex-wrap justify-center gap-x-8 capitalize text-theme-slate-100"
          >
            <li
              v-for="treatment in member.treatments"
              :key="treatment"
              class="list-disc"
            >
              {{ treatment }}
            </li>
          </ul>

          <!-- Team member treatments description -->
          <div class="mt-auto pt-6">
            <p>
              {{ member.description }}
            </p>
            <TheSocialIconBlock class="mt-6 space-x-4 text-center" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
