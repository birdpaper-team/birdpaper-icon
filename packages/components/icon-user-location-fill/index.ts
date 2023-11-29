import type { App } from 'vue';
import _IconUserLocationFill from './icon-user-location-fill.vue';

const IconUserLocationFill = Object.assign(_IconUserLocationFill, {
  install: (app: App) => {
    app.component(_IconUserLocationFill.name, _IconUserLocationFill);
  }
});

export default IconUserLocationFill;