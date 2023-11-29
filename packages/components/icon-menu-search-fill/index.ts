import type { App } from 'vue';
import _IconMenuSearchFill from './icon-menu-search-fill.vue';

const IconMenuSearchFill = Object.assign(_IconMenuSearchFill, {
  install: (app: App) => {
    app.component(_IconMenuSearchFill.name, _IconMenuSearchFill);
  }
});

export default IconMenuSearchFill;