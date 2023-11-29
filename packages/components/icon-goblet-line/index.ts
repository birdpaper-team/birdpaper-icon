import type { App } from 'vue';
import _IconGobletLine from './icon-goblet-line.vue';

const IconGobletLine = Object.assign(_IconGobletLine, {
  install: (app: App) => {
    app.component(_IconGobletLine.name, _IconGobletLine);
  }
});

export default IconGobletLine;