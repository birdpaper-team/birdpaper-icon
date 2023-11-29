import type { App } from 'vue';
import _IconDirectionFill from './icon-direction-fill.vue';

const IconDirectionFill = Object.assign(_IconDirectionFill, {
  install: (app: App) => {
    app.component(_IconDirectionFill.name, _IconDirectionFill);
  }
});

export default IconDirectionFill;