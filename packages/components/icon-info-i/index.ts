import type { App } from 'vue';
import _IconInfoI from './icon-info-i.vue';

const IconInfoI = Object.assign(_IconInfoI, {
  install: (app: App) => {
    app.component(_IconInfoI.name, _IconInfoI);
  }
});

export default IconInfoI;