import type { App } from 'vue';
import _IconContrast2Line from './icon-contrast-2-line.vue';

const IconContrast2Line = Object.assign(_IconContrast2Line, {
  install: (app: App) => {
    app.component(_IconContrast2Line.name, _IconContrast2Line);
  }
});

export default IconContrast2Line;