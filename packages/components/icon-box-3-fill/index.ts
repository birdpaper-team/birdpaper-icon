import type { App } from 'vue';
import _IconBox3Fill from './icon-box-3-fill.vue';

const IconBox3Fill = Object.assign(_IconBox3Fill, {
  install: (app: App) => {
    app.component(_IconBox3Fill.name, _IconBox3Fill);
  }
});

export default IconBox3Fill;