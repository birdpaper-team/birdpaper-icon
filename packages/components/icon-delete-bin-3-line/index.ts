import type { App } from 'vue';
import _IconDeleteBin3Line from './icon-delete-bin-3-line.vue';

const IconDeleteBin3Line = Object.assign(_IconDeleteBin3Line, {
  install: (app: App) => {
    app.component(_IconDeleteBin3Line.name, _IconDeleteBin3Line);
  }
});

export default IconDeleteBin3Line;