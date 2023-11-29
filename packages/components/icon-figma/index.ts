import type { App } from 'vue';
import _IconFigma from './icon-figma.vue';

const IconFigma = Object.assign(_IconFigma, {
  install: (app: App) => {
    app.component(_IconFigma.name, _IconFigma);
  }
});

export default IconFigma;