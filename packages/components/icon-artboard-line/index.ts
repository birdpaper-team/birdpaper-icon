import type { App } from 'vue';
import _IconArtboardLine from './icon-artboard-line.vue';

const IconArtboardLine = Object.assign(_IconArtboardLine, {
  install: (app: App) => {
    app.component(_IconArtboardLine.name, _IconArtboardLine);
  }
});

export default IconArtboardLine;