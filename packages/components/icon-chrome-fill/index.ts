import type { App } from 'vue';
import _IconChromeFill from './icon-chrome-fill.vue';

const IconChromeFill = Object.assign(_IconChromeFill, {
  install: (app: App) => {
    app.component(_IconChromeFill.name, _IconChromeFill);
  }
});

export default IconChromeFill;