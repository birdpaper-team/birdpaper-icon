import type { App } from 'vue';
import _IconDeer from './icon-deer.vue';

const IconDeer = Object.assign(_IconDeer, {
  install: (app: App) => {
    app.component(_IconDeer.name, _IconDeer);
  }
});

export default IconDeer;