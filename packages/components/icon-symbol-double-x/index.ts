import type { App } from 'vue';
import _IconSymbolDoubleX from './icon-symbol-double-x.vue';

const IconSymbolDoubleX = Object.assign(_IconSymbolDoubleX, {
  install: (app: App) => {
    app.component(_IconSymbolDoubleX.name, _IconSymbolDoubleX);
  }
});

export default IconSymbolDoubleX;