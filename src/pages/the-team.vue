<script setup>
  definePageMeta({
    layout: 'dynamic',
  })

  useHead({
    title: '- The team',
  })

  const store = useStore().value
  const { teamMembers } = store
  const teamImage = ['laura', 'sarah', 'alex']
</script>

<template>
  <div class="container mx-auto mt-24">
    <div class="mb-16 space-y-8 sm:mb-0">
      <h1 class="text-center text-6xl">The Team</h1>
      <div
        class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3"
      >
        <div
          v-for="(member, index) in teamMembers"
          :key="member.id"
          class="flex flex-col gap-y-6 rounded-base px-4 py-2 shadow-md"
        >
          <!-- Team member image -->
          <img
            class="w-full rounded-base"
            :src="`/images/${teamImage[index]}.jpg`"
            :alt="`profile picture of ${member.name}`"
            height="360"
            width="240"
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
      </div>
    </div>
  </div>
</template>
