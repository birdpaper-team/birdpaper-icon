import type { App } from 'vue';
import _IconSuitcaseFill from './icon-suitcase-fill.vue';

const IconSuitcaseFill = Object.assign(_IconSuitcaseFill, {
  install: (app: App) => {
    app.component(_IconSuitcaseFill.name, _IconSuitcaseFill);
  }
});

export default IconSuitcaseFill;