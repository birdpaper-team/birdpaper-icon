import type { App } from 'vue';
import _IconFlag2Line from './icon-flag-2-line.vue';

const IconFlag2Line = Object.assign(_IconFlag2Line, {
  install: (app: App) => {
    app.component(_IconFlag2Line.name, _IconFlag2Line);
  }
});

export default IconFlag2Line;