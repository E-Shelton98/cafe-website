// Get the sections and pagination controls
const sections = document.querySelectorAll('.section')
const drinksPrevBtn = document.querySelector('.drinks-prev')
const drinksNextBtn = document.querySelector('.drinks-next')

// Set the initial section index
let sectionIndex = 0

// Hide all sections except the first one
sections.forEach((section, index) => {
  if (index !== sectionIndex) {
    section.style.display = 'none'
  }
})

// Add click handlers for the pagination controls
drinksPrevBtn.addEventListener('click', () => {
  if (sectionIndex > 0) {
    // Hide the current section
    sections[sectionIndex].style.display = 'none'

    // Decrement the section index
    sectionIndex--

    // Show the new section
    sections[sectionIndex].style.display = 'block'
  }
})

drinksNextBtn.addEventListener('click', () => {
  if (sectionIndex < sections.length - 1) {
    // Hide the current section
    sections[sectionIndex].style.display = 'none'

    // Increment the section index
    sectionIndex++

    // Show the new section
    sections[sectionIndex].style.display = 'block'
  }
  else if (sectionIndex == sections.length -1) {
    // Hide the current section
    sections[sectionIndex].style.display = 'none'

    // Set the section index back to 0
    sectionIndex = 0

    // Show the new section
    sections[sectionIndex].style.display = 'block'
  }
})
