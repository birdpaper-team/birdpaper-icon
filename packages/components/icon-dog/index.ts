import type { App } from 'vue';
import _IconDog from './icon-dog.vue';

const IconDog = Object.assign(_IconDog, {
  install: (app: App) => {
    app.component(_IconDog.name, _IconDog);
  }
});

export default IconDog;