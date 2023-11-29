import type { App } from 'vue';
import _IconBrush3Fill from './icon-brush-3-fill.vue';

const IconBrush3Fill = Object.assign(_IconBrush3Fill, {
  install: (app: App) => {
    app.component(_IconBrush3Fill.name, _IconBrush3Fill);
  }
});

export default IconBrush3Fill;