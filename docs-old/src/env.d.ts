/// <reference types="birdpaper-ui/dist/components/components" />

declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
  declare module '*.less'
}