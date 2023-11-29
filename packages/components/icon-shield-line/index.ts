import type { App } from 'vue';
import _IconShieldLine from './icon-shield-line.vue';

const IconShieldLine = Object.assign(_IconShieldLine, {
  install: (app: App) => {
    app.component(_IconShieldLine.name, _IconShieldLine);
  }
});

export default IconShieldLine;