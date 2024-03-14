import type { App } from 'vue';
import _IconArchiveStackFill from './icon-archive-stack-fill.vue';

const IconArchiveStackFill = Object.assign(_IconArchiveStackFill, {
  install: (app: App) => {
    app.component(_IconArchiveStackFill.name, _IconArchiveStackFill);
  }
});

export default IconArchiveStackFill;