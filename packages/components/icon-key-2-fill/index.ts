import type { App } from 'vue';
import _IconKey2Fill from './icon-key-2-fill.vue';

const IconKey2Fill = Object.assign(_IconKey2Fill, {
  install: (app: App) => {
    app.component(_IconKey2Fill.name, _IconKey2Fill);
  }
});

export default IconKey2Fill;