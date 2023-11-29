import type { App } from 'vue';
import _IconNewsFill from './icon-news-fill.vue';

const IconNewsFill = Object.assign(_IconNewsFill, {
  install: (app: App) => {
    app.component(_IconNewsFill.name, _IconNewsFill);
  }
});

export default IconNewsFill;