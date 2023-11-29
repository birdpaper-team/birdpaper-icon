import type { App } from 'vue';
import _IconUserSearchFill from './icon-user-search-fill.vue';

const IconUserSearchFill = Object.assign(_IconUserSearchFill, {
  install: (app: App) => {
    app.component(_IconUserSearchFill.name, _IconUserSearchFill);
  }
});

export default IconUserSearchFill;