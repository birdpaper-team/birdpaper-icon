import type { App } from 'vue';
import _IconInfinityFill from './icon-infinity-fill.vue';

const IconInfinityFill = Object.assign(_IconInfinityFill, {
  install: (app: App) => {
    app.component(_IconInfinityFill.name, _IconInfinityFill);
  }
});

export default IconInfinityFill;