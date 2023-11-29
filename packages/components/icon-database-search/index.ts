import type { App } from 'vue';
import _IconDatabaseSearch from './icon-database-search.vue';

const IconDatabaseSearch = Object.assign(_IconDatabaseSearch, {
  install: (app: App) => {
    app.component(_IconDatabaseSearch.name, _IconDatabaseSearch);
  }
});

export default IconDatabaseSearch;