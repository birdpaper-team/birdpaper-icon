import type { App } from 'vue';
import _IconShining2Fill from './icon-shining-2-fill.vue';

const IconShining2Fill = Object.assign(_IconShining2Fill, {
  install: (app: App) => {
    app.component(_IconShining2Fill.name, _IconShining2Fill);
  }
});

export default IconShining2Fill;