import type { App } from 'vue';
import _IconDeleteBin7Line from './icon-delete-bin-7-line.vue';

const IconDeleteBin7Line = Object.assign(_IconDeleteBin7Line, {
  install: (app: App) => {
    app.component(_IconDeleteBin7Line.name, _IconDeleteBin7Line);
  }
});

export default IconDeleteBin7Line;