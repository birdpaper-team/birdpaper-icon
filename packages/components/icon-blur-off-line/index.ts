import type { App } from 'vue';
import _IconBlurOffLine from './icon-blur-off-line.vue';

const IconBlurOffLine = Object.assign(_IconBlurOffLine, {
  install: (app: App) => {
    app.component(_IconBlurOffLine.name, _IconBlurOffLine);
  }
});

export default IconBlurOffLine;