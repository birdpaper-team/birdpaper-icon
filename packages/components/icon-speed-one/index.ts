import type { App } from 'vue';
import _IconSpeedOne from './icon-speed-one.vue';

const IconSpeedOne = Object.assign(_IconSpeedOne, {
  install: (app: App) => {
    app.component(_IconSpeedOne.name, _IconSpeedOne);
  }
});

export default IconSpeedOne;