// Get the sections and pagination controls
const drinks = document.querySelectorAll('.seasonal-drink')
const prevBtn = document.querySelector('.drink-prev')
const nextBtn = document.querySelector('.drink-next')
const drinkTracker = document.querySelector('#drink-tracker')

// Set the initial section index
let drinkIndex = 0
prevBtn.disabled = true

// Hide all sections except the first one
drinks.forEach((drink, index) => {
    const div = document.createElement('div')
    div.classList.add('.drink-tracker-dot')
  drinkTracker.appendChild(div)
  if (index !== drinkIndex) {
    drink.style.display = 'none'
  }
})

// Add click handlers for the pagination controls
prevBtn.addEventListener('click', () => {
  nextBtn.disabled = false
  if (drinkIndex > 0) {
    // Hide the current section
    drinks[drinkIndex].style.display = 'none'

    // Decrement the section index
    drinkIndex--

    // Show the new section
    drinks[drinkIndex].style.display = 'flex'
  }
  if (drinkIndex === 0) {
    prevBtn.disabled = true
  }
})

nextBtn.addEventListener('click', () => {
  prevBtn.disabled = false
  if (drinkIndex < drinks.length - 1) {
    // Hide the current section
    drinks[drinkIndex].style.display = 'none'

    // Increment the section index
    drinkIndex++

    // Show the new section
    drinks[drinkIndex].style.display = 'flex'
  }
  if (drinkIndex === drinks.length - 1) {
    nextBtn.disabled = true
  }
})
