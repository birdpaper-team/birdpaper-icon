import type { App } from 'vue';
import _IconFigmaMask from './icon-figma-mask.vue';

const IconFigmaMask = Object.assign(_IconFigmaMask, {
  install: (app: App) => {
    app.component(_IconFigmaMask.name, _IconFigmaMask);
  }
});

export default IconFigmaMask;