import type { App } from 'vue';
import _IconGhostLine from './icon-ghost-line.vue';

const IconGhostLine = Object.assign(_IconGhostLine, {
  install: (app: App) => {
    app.component(_IconGhostLine.name, _IconGhostLine);
  }
});

export default IconGhostLine;