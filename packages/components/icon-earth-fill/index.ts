import type { App } from 'vue';
import _IconEarthFill from './icon-earth-fill.vue';

const IconEarthFill = Object.assign(_IconEarthFill, {
  install: (app: App) => {
    app.component(_IconEarthFill.name, _IconEarthFill);
  }
});

export default IconEarthFill;