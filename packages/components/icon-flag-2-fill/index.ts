import type { App } from 'vue';
import _IconFlag2Fill from './icon-flag-2-fill.vue';

const IconFlag2Fill = Object.assign(_IconFlag2Fill, {
  install: (app: App) => {
    app.component(_IconFlag2Fill.name, _IconFlag2Fill);
  }
});

export default IconFlag2Fill;