import type { App } from 'vue';
import _IconTapeFill from './icon-tape-fill.vue';

const IconTapeFill = Object.assign(_IconTapeFill, {
  install: (app: App) => {
    app.component(_IconTapeFill.name, _IconTapeFill);
  }
});

export default IconTapeFill;