import type { App } from 'vue';
import _IconShieldFlashLine from './icon-shield-flash-line.vue';

const IconShieldFlashLine = Object.assign(_IconShieldFlashLine, {
  install: (app: App) => {
    app.component(_IconShieldFlashLine.name, _IconShieldFlashLine);
  }
});

export default IconShieldFlashLine;