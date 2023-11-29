import type { App } from 'vue';
import _IconLightRain from './icon-light-rain.vue';

const IconLightRain = Object.assign(_IconLightRain, {
  install: (app: App) => {
    app.component(_IconLightRain.name, _IconLightRain);
  }
});

export default IconLightRain;