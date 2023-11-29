import type { App } from 'vue';
import _IconBikeFill from './icon-bike-fill.vue';

const IconBikeFill = Object.assign(_IconBikeFill, {
  install: (app: App) => {
    app.component(_IconBikeFill.name, _IconBikeFill);
  }
});

export default IconBikeFill;