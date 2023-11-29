import type { App } from 'vue';
import _IconLeftC from './icon-left-c.vue';

const IconLeftC = Object.assign(_IconLeftC, {
  install: (app: App) => {
    app.component(_IconLeftC.name, _IconLeftC);
  }
});

export default IconLeftC;