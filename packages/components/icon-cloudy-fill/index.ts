import type { App } from 'vue';
import _IconCloudyFill from './icon-cloudy-fill.vue';

const IconCloudyFill = Object.assign(_IconCloudyFill, {
  install: (app: App) => {
    app.component(_IconCloudyFill.name, _IconCloudyFill);
  }
});

export default IconCloudyFill;