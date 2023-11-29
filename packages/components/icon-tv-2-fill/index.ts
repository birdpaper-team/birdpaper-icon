import type { App } from 'vue';
import _IconTv2Fill from './icon-tv-2-fill.vue';

const IconTv2Fill = Object.assign(_IconTv2Fill, {
  install: (app: App) => {
    app.component(_IconTv2Fill.name, _IconTv2Fill);
  }
});

export default IconTv2Fill;