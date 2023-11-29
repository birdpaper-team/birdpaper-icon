import type { App } from 'vue';
import _IconInkBottleLine from './icon-ink-bottle-line.vue';

const IconInkBottleLine = Object.assign(_IconInkBottleLine, {
  install: (app: App) => {
    app.component(_IconInkBottleLine.name, _IconInkBottleLine);
  }
});

export default IconInkBottleLine;