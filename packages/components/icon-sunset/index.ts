import type { App } from 'vue';
import _IconSunset from './icon-sunset.vue';

const IconSunset = Object.assign(_IconSunset, {
  install: (app: App) => {
    app.component(_IconSunset.name, _IconSunset);
  }
});

export default IconSunset;