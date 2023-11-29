import type { App } from 'vue';
import _IconShieldUserLine from './icon-shield-user-line.vue';

const IconShieldUserLine = Object.assign(_IconShieldUserLine, {
  install: (app: App) => {
    app.component(_IconShieldUserLine.name, _IconShieldUserLine);
  }
});

export default IconShieldUserLine;