import type { App } from 'vue';
import _IconEye2Line from './icon-eye-2-line.vue';

const IconEye2Line = Object.assign(_IconEye2Line, {
  install: (app: App) => {
    app.component(_IconEye2Line.name, _IconEye2Line);
  }
});

export default IconEye2Line;