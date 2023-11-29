import type { App } from 'vue';
import _IconUnpinFill from './icon-unpin-fill.vue';

const IconUnpinFill = Object.assign(_IconUnpinFill, {
  install: (app: App) => {
    app.component(_IconUnpinFill.name, _IconUnpinFill);
  }
});

export default IconUnpinFill;