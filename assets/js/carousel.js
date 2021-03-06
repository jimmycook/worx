// Utility wrapper around query selectors
function $(selector) {
  const result = document.querySelectorAll(selector)
  if (result) {
    if (result.length > 1)
      return Array.from(result)
    return result[0]
  }
}

// Carousel code
const prev = $('.prev')
const next = $('.next')
const items = $('.carousel__item')

function nextSlide () {
  const active = $('.carousel__item.active')
  const { nextIndex } = itemIndexer(items, active)
  const ne = items[nextIndex]
  items.forEach((item)=> item.classList.remove('active'))
  ne.classList.add('active')
  clearInt()
}

function prevSlide () {
  const active = $('.carousel__item.active')
  const { prevIndex } = itemIndexer(items, active)
  const ne = items[prevIndex]
  items.forEach((item) => item.classList.remove('active'))
  ne.classList.add('active')
  clearInt()
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)
const interval = setInterval(nextSlide, 5000)

function clearInt () {
  if (interval) {
    clearInterval(interval)
  }
}

function itemIndexer(items, active) {
  if (items) {
    const activeIndex = items.indexOf(active)
    return {
      nextIndex: activeIndex + 1 >= items.length ? 0 : activeIndex + 1,
      prevIndex: activeIndex - 1 < 0 ? items.length - 1 : activeIndex - 1,
    }
  }
}
