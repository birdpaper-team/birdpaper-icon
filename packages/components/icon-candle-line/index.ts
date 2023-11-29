import type { App } from 'vue';
import _IconCandleLine from './icon-candle-line.vue';

const IconCandleLine = Object.assign(_IconCandleLine, {
  install: (app: App) => {
    app.component(_IconCandleLine.name, _IconCandleLine);
  }
});

export default IconCandleLine;