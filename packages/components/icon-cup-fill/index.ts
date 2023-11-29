import type { App } from 'vue';
import _IconCupFill from './icon-cup-fill.vue';

const IconCupFill = Object.assign(_IconCupFill, {
  install: (app: App) => {
    app.component(_IconCupFill.name, _IconCupFill);
  }
});

export default IconCupFill;