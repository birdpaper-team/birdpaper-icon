import type { App } from 'vue';
import _IconDownC from './icon-down-c.vue';

const IconDownC = Object.assign(_IconDownC, {
  install: (app: App) => {
    app.component(_IconDownC.name, _IconDownC);
  }
});

export default IconDownC;