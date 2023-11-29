import type { App } from 'vue';
import _IconAddSubtract from './icon-add-subtract.vue';

const IconAddSubtract = Object.assign(_IconAddSubtract, {
  install: (app: App) => {
    app.component(_IconAddSubtract.name, _IconAddSubtract);
  }
});

export default IconAddSubtract;