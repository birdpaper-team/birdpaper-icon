import type { App } from 'vue';
import _IconDeleteBin6Line from './icon-delete-bin-6-line.vue';

const IconDeleteBin6Line = Object.assign(_IconDeleteBin6Line, {
  install: (app: App) => {
    app.component(_IconDeleteBin6Line.name, _IconDeleteBin6Line);
  }
});

export default IconDeleteBin6Line;