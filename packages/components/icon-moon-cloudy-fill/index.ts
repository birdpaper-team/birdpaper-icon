import type { App } from 'vue';
import _IconMoonCloudyFill from './icon-moon-cloudy-fill.vue';

const IconMoonCloudyFill = Object.assign(_IconMoonCloudyFill, {
  install: (app: App) => {
    app.component(_IconMoonCloudyFill.name, _IconMoonCloudyFill);
  }
});

export default IconMoonCloudyFill;