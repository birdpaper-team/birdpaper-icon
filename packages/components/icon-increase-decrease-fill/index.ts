import type { App } from 'vue';
import _IconIncreaseDecreaseFill from './icon-increase-decrease-fill.vue';

const IconIncreaseDecreaseFill = Object.assign(_IconIncreaseDecreaseFill, {
  install: (app: App) => {
    app.component(_IconIncreaseDecreaseFill.name, _IconIncreaseDecreaseFill);
  }
});

export default IconIncreaseDecreaseFill;