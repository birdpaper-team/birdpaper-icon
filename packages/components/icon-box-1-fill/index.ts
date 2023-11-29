import type { App } from 'vue';
import _IconBox1Fill from './icon-box-1-fill.vue';

const IconBox1Fill = Object.assign(_IconBox1Fill, {
  install: (app: App) => {
    app.component(_IconBox1Fill.name, _IconBox1Fill);
  }
});

export default IconBox1Fill;