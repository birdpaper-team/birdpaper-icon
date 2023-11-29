import type { App } from 'vue';
import _IconArchive2Line from './icon-archive-2-line.vue';

const IconArchive2Line = Object.assign(_IconArchive2Line, {
  install: (app: App) => {
    app.component(_IconArchive2Line.name, _IconArchive2Line);
  }
});

export default IconArchive2Line;