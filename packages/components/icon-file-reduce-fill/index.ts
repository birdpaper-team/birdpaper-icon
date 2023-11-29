import type { App } from 'vue';
import _IconFileReduceFill from './icon-file-reduce-fill.vue';

const IconFileReduceFill = Object.assign(_IconFileReduceFill, {
  install: (app: App) => {
    app.component(_IconFileReduceFill.name, _IconFileReduceFill);
  }
});

export default IconFileReduceFill;