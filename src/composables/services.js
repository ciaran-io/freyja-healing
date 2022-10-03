import data from '~/assets/data/store.json'

const { conditions, reviews, treatments, contactInformation, teamMembers } =
  data
const treatmentNames = computed(
  () => new Set(treatments.map((treatment) => treatment.name.toLowerCase()))
)

const treatmentUrl = computed(
  () =>
    new Set([...treatmentNames.value].map((name) => name.replace(/\s/g, '-')))
)

export const useStore = () =>
  useState('store', () => {
    return {
      treatments,
      treatmentNames,
      treatmentUrl,
      conditions,
      reviews,
      contactInformation,
      teamMembers,
    }
  })
