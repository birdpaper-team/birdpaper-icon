import type { App } from 'vue';
import _IconForbid2Fill from './icon-forbid-2-fill.vue';

const IconForbid2Fill = Object.assign(_IconForbid2Fill, {
  install: (app: App) => {
    app.component(_IconForbid2Fill.name, _IconForbid2Fill);
  }
});

export default IconForbid2Fill;