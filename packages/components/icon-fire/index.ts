import type { App } from 'vue';
import _IconFire from './icon-fire.vue';

const IconFire = Object.assign(_IconFire, {
  install: (app: App) => {
    app.component(_IconFire.name, _IconFire);
  }
});

export default IconFire;