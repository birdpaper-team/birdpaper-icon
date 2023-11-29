import type { App } from 'vue';
import _IconEmailSearch from './icon-email-search.vue';

const IconEmailSearch = Object.assign(_IconEmailSearch, {
  install: (app: App) => {
    app.component(_IconEmailSearch.name, _IconEmailSearch);
  }
});

export default IconEmailSearch;