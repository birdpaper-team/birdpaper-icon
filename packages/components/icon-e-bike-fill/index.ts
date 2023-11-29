import type { App } from 'vue';
import _IconEBikeFill from './icon-e-bike-fill.vue';

const IconEBikeFill = Object.assign(_IconEBikeFill, {
  install: (app: App) => {
    app.component(_IconEBikeFill.name, _IconEBikeFill);
  }
});

export default IconEBikeFill;