import type { App } from 'vue';
import _IconLayoutBottom2Fill from './icon-layout-bottom-2-fill.vue';

const IconLayoutBottom2Fill = Object.assign(_IconLayoutBottom2Fill, {
  install: (app: App) => {
    app.component(_IconLayoutBottom2Fill.name, _IconLayoutBottom2Fill);
  }
});

export default IconLayoutBottom2Fill;