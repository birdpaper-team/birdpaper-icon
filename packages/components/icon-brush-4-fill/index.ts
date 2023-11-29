import type { App } from 'vue';
import _IconBrush4Fill from './icon-brush-4-fill.vue';

const IconBrush4Fill = Object.assign(_IconBrush4Fill, {
  install: (app: App) => {
    app.component(_IconBrush4Fill.name, _IconBrush4Fill);
  }
});

export default IconBrush4Fill;