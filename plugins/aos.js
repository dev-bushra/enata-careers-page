import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({ 
    disable: false,
    startEvent: 'DOMContentLoaded',
    offset: 120,
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  })
}
