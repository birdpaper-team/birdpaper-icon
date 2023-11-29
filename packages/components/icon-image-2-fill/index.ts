import type { App } from 'vue';
import _IconImage2Fill from './icon-image-2-fill.vue';

const IconImage2Fill = Object.assign(_IconImage2Fill, {
  install: (app: App) => {
    app.component(_IconImage2Fill.name, _IconImage2Fill);
  }
});

export default IconImage2Fill;