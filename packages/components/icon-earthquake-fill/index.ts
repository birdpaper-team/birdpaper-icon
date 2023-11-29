import type { App } from 'vue';
import _IconEarthquakeFill from './icon-earthquake-fill.vue';

const IconEarthquakeFill = Object.assign(_IconEarthquakeFill, {
  install: (app: App) => {
    app.component(_IconEarthquakeFill.name, _IconEarthquakeFill);
  }
});

export default IconEarthquakeFill;