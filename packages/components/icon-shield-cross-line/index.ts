import type { App } from 'vue';
import _IconShieldCrossLine from './icon-shield-cross-line.vue';

const IconShieldCrossLine = Object.assign(_IconShieldCrossLine, {
  install: (app: App) => {
    app.component(_IconShieldCrossLine.name, _IconShieldCrossLine);
  }
});

export default IconShieldCrossLine;