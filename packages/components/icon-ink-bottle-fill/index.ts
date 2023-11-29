import type { App } from 'vue';
import _IconInkBottleFill from './icon-ink-bottle-fill.vue';

const IconInkBottleFill = Object.assign(_IconInkBottleFill, {
  install: (app: App) => {
    app.component(_IconInkBottleFill.name, _IconInkBottleFill);
  }
});

export default IconInkBottleFill;