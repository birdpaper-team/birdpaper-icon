import type { App } from 'vue';
import _IconBrush2Fill from './icon-brush-2-fill.vue';

const IconBrush2Fill = Object.assign(_IconBrush2Fill, {
  install: (app: App) => {
    app.component(_IconBrush2Fill.name, _IconBrush2Fill);
  }
});

export default IconBrush2Fill;