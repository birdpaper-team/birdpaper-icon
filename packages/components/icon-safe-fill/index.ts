import type { App } from 'vue';
import _IconSafeFill from './icon-safe-fill.vue';

const IconSafeFill = Object.assign(_IconSafeFill, {
  install: (app: App) => {
    app.component(_IconSafeFill.name, _IconSafeFill);
  }
});

export default IconSafeFill;