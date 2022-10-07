export function showHiddenContent(target) {
  const button = target
  const icon = button.firstElementChild
  const hiddenContent = button.parentElement.children[2]
  const spacing = 20

  // Set the height of the hidden content to contents scroll height
  // Rotate icons & setAttributes on buttons
  if (hiddenContent.style.height) {
    hiddenContent.style.height = null
    icon.style.transform = 'rotate(0deg)'
    button.setAttribute('aria-expanded', false)
  } else {
    hiddenContent.style.height = hiddenContent.scrollHeight + spacing + 'px'
    icon.style.transform = 'rotate(180deg)'
    button.setAttribute('aria-expanded', true)
  }
}
