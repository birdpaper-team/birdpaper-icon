import type { App } from 'vue';
import _IconFileWord2Line from './icon-file-word-2-line.vue';

const IconFileWord2Line = Object.assign(_IconFileWord2Line, {
  install: (app: App) => {
    app.component(_IconFileWord2Line.name, _IconFileWord2Line);
  }
});

export default IconFileWord2Line;