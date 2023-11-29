import type { App } from 'vue';
import _IconFist from './icon-fist.vue';

const IconFist = Object.assign(_IconFist, {
  install: (app: App) => {
    app.component(_IconFist.name, _IconFist);
  }
});

export default IconFist;