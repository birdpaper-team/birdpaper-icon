import type { App } from 'vue';
import _IconRouteFill from './icon-route-fill.vue';

const IconRouteFill = Object.assign(_IconRouteFill, {
  install: (app: App) => {
    app.component(_IconRouteFill.name, _IconRouteFill);
  }
});

export default IconRouteFill;