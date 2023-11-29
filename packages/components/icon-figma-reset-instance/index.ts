import type { App } from 'vue';
import _IconFigmaResetInstance from './icon-figma-reset-instance.vue';

const IconFigmaResetInstance = Object.assign(_IconFigmaResetInstance, {
  install: (app: App) => {
    app.component(_IconFigmaResetInstance.name, _IconFigmaResetInstance);
  }
});

export default IconFigmaResetInstance;