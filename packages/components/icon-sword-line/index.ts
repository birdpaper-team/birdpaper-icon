import type { App } from 'vue';
import _IconSwordLine from './icon-sword-line.vue';

const IconSwordLine = Object.assign(_IconSwordLine, {
  install: (app: App) => {
    app.component(_IconSwordLine.name, _IconSwordLine);
  }
});

export default IconSwordLine;