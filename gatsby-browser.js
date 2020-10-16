import '@styles/index.css'

export const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
  }
}
