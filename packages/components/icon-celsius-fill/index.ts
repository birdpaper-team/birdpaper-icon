import type { App } from 'vue';
import _IconCelsiusFill from './icon-celsius-fill.vue';

const IconCelsiusFill = Object.assign(_IconCelsiusFill, {
  install: (app: App) => {
    app.component(_IconCelsiusFill.name, _IconCelsiusFill);
  }
});

export default IconCelsiusFill;