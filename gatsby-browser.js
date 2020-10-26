import '@styles/index.css'

export const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
  }
  import('smoothscroll-polyfill').then(smoothscroll => {
    smoothscroll.polyfill()
  })
}

export const shouldUpdateScroll = () => false
