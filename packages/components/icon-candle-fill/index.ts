import type { App } from 'vue';
import _IconCandleFill from './icon-candle-fill.vue';

const IconCandleFill = Object.assign(_IconCandleFill, {
  install: (app: App) => {
    app.component(_IconCandleFill.name, _IconCandleFill);
  }
});

export default IconCandleFill;