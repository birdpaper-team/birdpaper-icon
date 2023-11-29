import type { App } from 'vue';
import _IconRss from './icon-rss.vue';

const IconRss = Object.assign(_IconRss, {
  install: (app: App) => {
    app.component(_IconRss.name, _IconRss);
  }
});

export default IconRss;