import '../sass/app.scss'
import $ from 'jquery'

// Carousel code here
const back = $('.back')
const forward = $('.forward')
const items = $('.carousel__item')

forward.on('click', () => {
  const { nextIndex } = itemsInfo(items)
  console.log({nextIndex})
  const active = $('.active')  
  const ne = $(items[nextIndex])

  // Manage classes
  items.removeClass('next')
  items.removeClass('prev')
  active.addClass('prev')
  active.removeClass('active')
  ne.addClass('active')
})
back.on('click', () => {
  const { prevIndex } = itemsInfo(items)
  console.log({ prevIndex })
  const active = $('.active')
  const ne = $(items[prevIndex])

  // Manage classes
  items.removeClass('next')
  items.removeClass('prev')
  active.addClass('next')
  active.removeClass('active')
  ne.addClass('active')
})
function itemsInfo(items) {
  if (items) {    
    const activeIndex = items.index('.active')    
    return {
      activeIndex,
      nextIndex: nextIndex(items, activeIndex),
      prevIndex: prevIndex(items, activeIndex),
      length: items.length
    }
  }
}

function nextIndex(items, index) {
  if (index + 1 >= items.length) {
    return 0
  } else {
    return index + 1
  }
}

function prevIndex(items, index) {
  console.log({ index })
  if (index == 0) {
    return items.length - 1
  } else {
    return index - 1
  }
}
