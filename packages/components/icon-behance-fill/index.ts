import type { App } from 'vue';
import _IconBehanceFill from './icon-behance-fill.vue';

const IconBehanceFill = Object.assign(_IconBehanceFill, {
  install: (app: App) => {
    app.component(_IconBehanceFill.name, _IconBehanceFill);
  }
});

export default IconBehanceFill;