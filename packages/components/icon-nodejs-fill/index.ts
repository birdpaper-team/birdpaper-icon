import type { App } from 'vue';
import _IconNodejsFill from './icon-nodejs-fill.vue';

const IconNodejsFill = Object.assign(_IconNodejsFill, {
  install: (app: App) => {
    app.component(_IconNodejsFill.name, _IconNodejsFill);
  }
});

export default IconNodejsFill;