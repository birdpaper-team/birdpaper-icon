import type { App } from 'vue';
import _IconCloudyNight from './icon-cloudy-night.vue';

const IconCloudyNight = Object.assign(_IconCloudyNight, {
  install: (app: App) => {
    app.component(_IconCloudyNight.name, _IconCloudyNight);
  }
});

export default IconCloudyNight;