// Hide and show checklist when subtitle is clicked

const icons = document.querySelectorAll('.icon')
const subtitleContainers = document.querySelectorAll('.subtitle-container')

subtitleContainers.forEach(subtitleContainer => {
    subtitleContainer.addEventListener('click', event => {
        const currentlyActiveSubtitleContainer = document.querySelector('.subtitle-container.active')
        if (currentlyActiveSubtitleContainer && currentlyActiveSubtitleContainer!==subtitleContainer) {
            currentlyActiveSubtitleContainer.classList.toggle('active')
            currentlyActiveSubtitleContainer.nextElementSibling.style.maxHeight = 0
        }

        subtitleContainer.classList.toggle('active')
        const listContainer = subtitleContainer.nextElementSibling
        if (subtitleContainer.classList.contains('active')) {
            listContainer.style.maxHeight = listContainer.scrollHeight + 'px'
        }
        else {
            listContainer.style.maxHeight = 0
        }
    })
})

// Show weekly to do list

const weekTuesday = document.querySelector('.week-tuesday')
const weekWednesday = document.querySelector('.week-wednesday')
const weekFriday = document.querySelector('.week-friday')
const weekSunday = document.querySelector('.week-sunday')

const tuesdayTodo = document.querySelector('.tuesday-todo')
const wednesdayTodo = document.querySelector('.wednesday-todo')
const fridayTodo = document.querySelector('.friday-todo')
const sundayTodo = document.querySelector('.sunday-todo')

// Tuesday

function showTuesdayTodo() {
    tuesdayTodo.classList.add('toggle-display')
    
    wednesdayTodo.classList.remove('toggle-display')
    fridayTodo.classList.remove('toggle-display')
    sundayTodo.classList.remove('toggle-display')

    weekTuesday.classList.add('focus')

    weekWednesday.classList.remove('focus')
    weekFriday.classList.remove('focus')
    weekSunday.classList.remove('focus')
}

weekTuesday.addEventListener('click', showTuesdayTodo)

// Wednesday

function showWednesdayTodo() {
    wednesdayTodo.classList.add('toggle-display')
    
    tuesdayTodo.classList.remove('toggle-display')
    fridayTodo.classList.remove('toggle-display')
    sundayTodo.classList.remove('toggle-display')

    weekWednesday.classList.add('focus')

    weekTuesday.classList.remove('focus')
    weekFriday.classList.remove('focus')
    weekSunday.classList.remove('focus')
}

weekWednesday.addEventListener('click', showWednesdayTodo)

// Friday

function showFridayTodo() {
    fridayTodo.classList.add('toggle-display')
    
    tuesdayTodo.classList.remove('toggle-display')
    wednesdayTodo.classList.remove('toggle-display')
    sundayTodo.classList.remove('toggle-display')

    weekFriday.classList.add('focus')

    weekTuesday.classList.remove('focus')
    weekWednesday.classList.remove('focus')
    weekSunday.classList.remove('focus')
}

weekFriday.addEventListener('click', showFridayTodo)

// Sunday

function showSundayTodo() {
    sundayTodo.classList.add('toggle-display')
    
    tuesdayTodo.classList.remove('toggle-display')
    wednesdayTodo.classList.remove('toggle-display')
    fridayTodo.classList.remove('toggle-display')

    weekSunday.classList.add('focus')

    weekTuesday.classList.remove('focus')
    weekWednesday.classList.remove('focus')
    weekFriday.classList.remove('focus')
}

weekSunday.addEventListener('click', showSundayTodo)

