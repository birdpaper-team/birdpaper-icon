import type { App } from 'vue';
import _IconArchiveDrawerFill from './icon-archive-drawer-fill.vue';

const IconArchiveDrawerFill = Object.assign(_IconArchiveDrawerFill, {
  install: (app: App) => {
    app.component(_IconArchiveDrawerFill.name, _IconArchiveDrawerFill);
  }
});

export default IconArchiveDrawerFill;