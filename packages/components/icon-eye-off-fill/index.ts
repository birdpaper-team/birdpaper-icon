import type { App } from 'vue';
import _IconEyeOffFill from './icon-eye-off-fill.vue';

const IconEyeOffFill = Object.assign(_IconEyeOffFill, {
  install: (app: App) => {
    app.component(_IconEyeOffFill.name, _IconEyeOffFill);
  }
});

export default IconEyeOffFill;