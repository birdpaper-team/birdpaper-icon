import type { App } from 'vue';
import _IconCloudy from './icon-cloudy.vue';

const IconCloudy = Object.assign(_IconCloudy, {
  install: (app: App) => {
    app.component(_IconCloudy.name, _IconCloudy);
  }
});

export default IconCloudy;