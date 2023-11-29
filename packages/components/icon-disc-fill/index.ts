import type { App } from 'vue';
import _IconDiscFill from './icon-disc-fill.vue';

const IconDiscFill = Object.assign(_IconDiscFill, {
  install: (app: App) => {
    app.component(_IconDiscFill.name, _IconDiscFill);
  }
});

export default IconDiscFill;