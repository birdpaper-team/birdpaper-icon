import type { App } from 'vue';
import _IconKnifeFill from './icon-knife-fill.vue';

const IconKnifeFill = Object.assign(_IconKnifeFill, {
  install: (app: App) => {
    app.component(_IconKnifeFill.name, _IconKnifeFill);
  }
});

export default IconKnifeFill;