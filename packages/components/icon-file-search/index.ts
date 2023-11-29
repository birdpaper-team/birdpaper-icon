import type { App } from 'vue';
import _IconFileSearch from './icon-file-search.vue';

const IconFileSearch = Object.assign(_IconFileSearch, {
  install: (app: App) => {
    app.component(_IconFileSearch.name, _IconFileSearch);
  }
});

export default IconFileSearch;