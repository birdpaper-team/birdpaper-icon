import type { App } from 'vue';
import _IconBrightness from './icon-brightness.vue';

const IconBrightness = Object.assign(_IconBrightness, {
  install: (app: App) => {
    app.component(_IconBrightness.name, _IconBrightness);
  }
});

export default IconBrightness;