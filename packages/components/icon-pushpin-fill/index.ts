import type { App } from 'vue';
import _IconPushpinFill from './icon-pushpin-fill.vue';

const IconPushpinFill = Object.assign(_IconPushpinFill, {
  install: (app: App) => {
    app.component(_IconPushpinFill.name, _IconPushpinFill);
  }
});

export default IconPushpinFill;