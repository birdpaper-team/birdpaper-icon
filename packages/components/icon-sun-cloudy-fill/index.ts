import type { App } from 'vue';
import _IconSunCloudyFill from './icon-sun-cloudy-fill.vue';

const IconSunCloudyFill = Object.assign(_IconSunCloudyFill, {
  install: (app: App) => {
    app.component(_IconSunCloudyFill.name, _IconSunCloudyFill);
  }
});

export default IconSunCloudyFill;