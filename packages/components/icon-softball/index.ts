import type { App } from 'vue';
import _IconSoftball from './icon-softball.vue';

const IconSoftball = Object.assign(_IconSoftball, {
  install: (app: App) => {
    app.component(_IconSoftball.name, _IconSoftball);
  }
});

export default IconSoftball;