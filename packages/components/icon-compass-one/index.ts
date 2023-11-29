import type { App } from 'vue';
import _IconCompassOne from './icon-compass-one.vue';

const IconCompassOne = Object.assign(_IconCompassOne, {
  install: (app: App) => {
    app.component(_IconCompassOne.name, _IconCompassOne);
  }
});

export default IconCompassOne;