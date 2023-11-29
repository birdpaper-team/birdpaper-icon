import type { App } from 'vue';
import _IconBlurOffFill from './icon-blur-off-fill.vue';

const IconBlurOffFill = Object.assign(_IconBlurOffFill, {
  install: (app: App) => {
    app.component(_IconBlurOffFill.name, _IconBlurOffFill);
  }
});

export default IconBlurOffFill;