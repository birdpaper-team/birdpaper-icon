import type { App } from 'vue';
import _IconFoursquare from './icon-foursquare.vue';

const IconFoursquare = Object.assign(_IconFoursquare, {
  install: (app: App) => {
    app.component(_IconFoursquare.name, _IconFoursquare);
  }
});

export default IconFoursquare;