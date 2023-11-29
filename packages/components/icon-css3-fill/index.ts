import type { App } from 'vue';
import _IconCss3Fill from './icon-css3-fill.vue';

const IconCss3Fill = Object.assign(_IconCss3Fill, {
  install: (app: App) => {
    app.component(_IconCss3Fill.name, _IconCss3Fill);
  }
});

export default IconCss3Fill;