import type { App } from 'vue';
import _IconDoubanFill from './icon-douban-fill.vue';

const IconDoubanFill = Object.assign(_IconDoubanFill, {
  install: (app: App) => {
    app.component(_IconDoubanFill.name, _IconDoubanFill);
  }
});

export default IconDoubanFill;