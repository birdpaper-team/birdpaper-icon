import type { App } from 'vue';
import _IconFileShieldLine from './icon-file-shield-line.vue';

const IconFileShieldLine = Object.assign(_IconFileShieldLine, {
  install: (app: App) => {
    app.component(_IconFileShieldLine.name, _IconFileShieldLine);
  }
});

export default IconFileShieldLine;