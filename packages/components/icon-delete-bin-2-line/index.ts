import type { App } from 'vue';
import _IconDeleteBin2Line from './icon-delete-bin-2-line.vue';

const IconDeleteBin2Line = Object.assign(_IconDeleteBin2Line, {
  install: (app: App) => {
    app.component(_IconDeleteBin2Line.name, _IconDeleteBin2Line);
  }
});

export default IconDeleteBin2Line;