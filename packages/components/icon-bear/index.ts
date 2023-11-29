import type { App } from 'vue';
import _IconBear from './icon-bear.vue';

const IconBear = Object.assign(_IconBear, {
  install: (app: App) => {
    app.component(_IconBear.name, _IconBear);
  }
});

export default IconBear;