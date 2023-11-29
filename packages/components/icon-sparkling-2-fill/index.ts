import type { App } from 'vue';
import _IconSparkling2Fill from './icon-sparkling-2-fill.vue';

const IconSparkling2Fill = Object.assign(_IconSparkling2Fill, {
  install: (app: App) => {
    app.component(_IconSparkling2Fill.name, _IconSparkling2Fill);
  }
});

export default IconSparkling2Fill;