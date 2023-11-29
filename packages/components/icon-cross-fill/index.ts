import type { App } from 'vue';
import _IconCrossFill from './icon-cross-fill.vue';

const IconCrossFill = Object.assign(_IconCrossFill, {
  install: (app: App) => {
    app.component(_IconCrossFill.name, _IconCrossFill);
  }
});

export default IconCrossFill;