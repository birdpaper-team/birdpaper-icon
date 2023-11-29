import type { App } from 'vue';
import _IconDeleteBin4Line from './icon-delete-bin-4-line.vue';

const IconDeleteBin4Line = Object.assign(_IconDeleteBin4Line, {
  install: (app: App) => {
    app.component(_IconDeleteBin4Line.name, _IconDeleteBin4Line);
  }
});

export default IconDeleteBin4Line;