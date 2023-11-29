import type { App } from 'vue';
import _IconBox2Fill from './icon-box-2-fill.vue';

const IconBox2Fill = Object.assign(_IconBox2Fill, {
  install: (app: App) => {
    app.component(_IconBox2Fill.name, _IconBox2Fill);
  }
});

export default IconBox2Fill;