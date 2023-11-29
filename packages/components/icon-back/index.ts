import type { App } from 'vue';
import _IconBack from './icon-back.vue';

const IconBack = Object.assign(_IconBack, {
  install: (app: App) => {
    app.component(_IconBack.name, _IconBack);
  }
});

export default IconBack;