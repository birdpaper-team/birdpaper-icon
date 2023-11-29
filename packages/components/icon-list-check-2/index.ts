import type { App } from 'vue';
import _IconListCheck2 from './icon-list-check-2.vue';

const IconListCheck2 = Object.assign(_IconListCheck2, {
  install: (app: App) => {
    app.component(_IconListCheck2.name, _IconListCheck2);
  }
});

export default IconListCheck2;