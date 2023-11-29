import type { App } from 'vue';
import _IconBat from './icon-bat.vue';

const IconBat = Object.assign(_IconBat, {
  install: (app: App) => {
    app.component(_IconBat.name, _IconBat);
  }
});

export default IconBat;