import type { App } from 'vue';
import _IconRecentViewsSort from './icon-recent-views-sort.vue';

const IconRecentViewsSort = Object.assign(_IconRecentViewsSort, {
  install: (app: App) => {
    app.component(_IconRecentViewsSort.name, _IconRecentViewsSort);
  }
});

export default IconRecentViewsSort;