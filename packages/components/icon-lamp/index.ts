import type { App } from 'vue';
import _IconLamp from './icon-lamp.vue';

const IconLamp = Object.assign(_IconLamp, {
  install: (app: App) => {
    app.component(_IconLamp.name, _IconLamp);
  }
});

export default IconLamp;