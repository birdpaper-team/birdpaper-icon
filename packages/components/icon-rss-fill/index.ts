import type { App } from 'vue';
import _IconRssFill from './icon-rss-fill.vue';

const IconRssFill = Object.assign(_IconRssFill, {
  install: (app: App) => {
    app.component(_IconRssFill.name, _IconRssFill);
  }
});

export default IconRssFill;