import type { App } from 'vue';
import _IconPolaroid2Fill from './icon-polaroid-2-fill.vue';

const IconPolaroid2Fill = Object.assign(_IconPolaroid2Fill, {
  install: (app: App) => {
    app.component(_IconPolaroid2Fill.name, _IconPolaroid2Fill);
  }
});

export default IconPolaroid2Fill;