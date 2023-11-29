import type { App } from 'vue';
import _IconServerFill from './icon-server-fill.vue';

const IconServerFill = Object.assign(_IconServerFill, {
  install: (app: App) => {
    app.component(_IconServerFill.name, _IconServerFill);
  }
});

export default IconServerFill;