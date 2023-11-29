import type { App } from 'vue';
import _IconShieldCheckLine from './icon-shield-check-line.vue';

const IconShieldCheckLine = Object.assign(_IconShieldCheckLine, {
  install: (app: App) => {
    app.component(_IconShieldCheckLine.name, _IconShieldCheckLine);
  }
});

export default IconShieldCheckLine;