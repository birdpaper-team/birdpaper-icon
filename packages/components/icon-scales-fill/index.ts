import type { App } from 'vue';
import _IconScalesFill from './icon-scales-fill.vue';

const IconScalesFill = Object.assign(_IconScalesFill, {
  install: (app: App) => {
    app.component(_IconScalesFill.name, _IconScalesFill);
  }
});

export default IconScalesFill;