import type { App } from 'vue';
import _IconDeleteBin5Line from './icon-delete-bin-5-line.vue';

const IconDeleteBin5Line = Object.assign(_IconDeleteBin5Line, {
  install: (app: App) => {
    app.component(_IconDeleteBin5Line.name, _IconDeleteBin5Line);
  }
});

export default IconDeleteBin5Line;