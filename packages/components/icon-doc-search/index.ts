import type { App } from 'vue';
import _IconDocSearch from './icon-doc-search.vue';

const IconDocSearch = Object.assign(_IconDocSearch, {
  install: (app: App) => {
    app.component(_IconDocSearch.name, _IconDocSearch);
  }
});

export default IconDocSearch;