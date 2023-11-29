import type { App } from 'vue';
import _IconLayoutLeft2Fill from './icon-layout-left-2-fill.vue';

const IconLayoutLeft2Fill = Object.assign(_IconLayoutLeft2Fill, {
  install: (app: App) => {
    app.component(_IconLayoutLeft2Fill.name, _IconLayoutLeft2Fill);
  }
});

export default IconLayoutLeft2Fill;