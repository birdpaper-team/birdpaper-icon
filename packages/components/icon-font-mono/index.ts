import type { App } from 'vue';
import _IconFontMono from './icon-font-mono.vue';

const IconFontMono = Object.assign(_IconFontMono, {
  install: (app: App) => {
    app.component(_IconFontMono.name, _IconFontMono);
  }
});

export default IconFontMono;