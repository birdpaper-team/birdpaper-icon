import type { App } from 'vue';
import _IconEyeOffLine from './icon-eye-off-line.vue';

const IconEyeOffLine = Object.assign(_IconEyeOffLine, {
  install: (app: App) => {
    app.component(_IconEyeOffLine.name, _IconEyeOffLine);
  }
});

export default IconEyeOffLine;