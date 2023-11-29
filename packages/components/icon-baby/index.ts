import type { App } from 'vue';
import _IconBaby from './icon-baby.vue';

const IconBaby = Object.assign(_IconBaby, {
  install: (app: App) => {
    app.component(_IconBaby.name, _IconBaby);
  }
});

export default IconBaby;