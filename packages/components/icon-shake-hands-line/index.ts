import type { App } from 'vue';
import _IconShakeHandsLine from './icon-shake-hands-line.vue';

const IconShakeHandsLine = Object.assign(_IconShakeHandsLine, {
  install: (app: App) => {
    app.component(_IconShakeHandsLine.name, _IconShakeHandsLine);
  }
});

export default IconShakeHandsLine;