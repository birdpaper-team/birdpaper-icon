import type { App } from 'vue';
import _IconGameLine from './icon-game-line.vue';

const IconGameLine = Object.assign(_IconGameLine, {
  install: (app: App) => {
    app.component(_IconGameLine.name, _IconGameLine);
  }
});

export default IconGameLine;