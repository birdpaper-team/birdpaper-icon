import type { App } from 'vue';
import _IconThumbUpFill from './icon-thumb-up-fill.vue';

const IconThumbUpFill = Object.assign(_IconThumbUpFill, {
  install: (app: App) => {
    app.component(_IconThumbUpFill.name, _IconThumbUpFill);
  }
});

export default IconThumbUpFill;