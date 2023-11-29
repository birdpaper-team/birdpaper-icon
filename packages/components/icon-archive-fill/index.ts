import type { App } from 'vue';
import _IconArchiveFill from './icon-archive-fill.vue';

const IconArchiveFill = Object.assign(_IconArchiveFill, {
  install: (app: App) => {
    app.component(_IconArchiveFill.name, _IconArchiveFill);
  }
});

export default IconArchiveFill;