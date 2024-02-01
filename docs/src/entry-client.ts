import { createMainApp } from './main'

const { app, router } = createMainApp()

router.isReady().then(() => {
  app.mount('#app')
})