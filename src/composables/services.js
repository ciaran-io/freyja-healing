import data from '~/assets/data/store.json'

const { conditions, reviews, treatments, contactInformation, teamMembers } =
  data
// Return treatment names in lowercase
const treatmentNames = computed(
  () => new Set(treatments.map((treatment) => treatment.name.toLowerCase()))
)
// Replace empty space for hyphen in treatment names
const treatmentUrl = computed(
  () =>
    new Set([...treatmentNames.value].map((name) => name.replace(/\s/g, '-')))
)
// Export variables to be globally available in & reactive
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
