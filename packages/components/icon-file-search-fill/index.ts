import type { App } from 'vue';
import _IconFileSearchFill from './icon-file-search-fill.vue';

const IconFileSearchFill = Object.assign(_IconFileSearchFill, {
  install: (app: App) => {
    app.component(_IconFileSearchFill.name, _IconFileSearchFill);
  }
});

export default IconFileSearchFill;