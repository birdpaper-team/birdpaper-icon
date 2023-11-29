import type { App } from 'vue';
import _IconLoader3Fill from './icon-loader-3-fill.vue';

const IconLoader3Fill = Object.assign(_IconLoader3Fill, {
  install: (app: App) => {
    app.component(_IconLoader3Fill.name, _IconLoader3Fill);
  }
});

export default IconLoader3Fill;