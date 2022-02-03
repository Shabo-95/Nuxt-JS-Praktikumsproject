export default {
  inserted: (el) => {
    function loadImage() {
      console.log('loadImage()')
      const imageElement = imageElementArray()
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100)
        })
        imageElement.addEventListener('error', () => console.log('error'))
        if (imageElement.src != imageElement.dataset.url) {
          imageElement.src = imageElement.dataset.url
        }
      }
    }

    function imageElementArray() {
      return Array.from(el.children).find((el) => el.nodeName === 'IMG')
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          // observer.unobserve(el)
          window.addEventListener('resize', resizeHandlerWithLazyLoading)
        } else {
          window.removeEventListener('resize', resizeHandlerWithLazyLoading)
        }
      })
    }

    function resizeHandlerWithLazyLoading() {
      // console.log('el', el)
      const imageElement = imageElementArray()

      if (imageElement && imageElement.src != imageElement.dataset.url) {
        imageElement.src = imageElement.dataset.url
      }
      // loadImage()
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: '0',
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }
    if (window['IntersectionObserver']) {
      createObserver()
    } else {
      loadImage()
    }
  },
}
