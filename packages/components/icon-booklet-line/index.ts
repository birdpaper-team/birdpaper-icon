import type { App } from 'vue';
import _IconBookletLine from './icon-booklet-line.vue';

const IconBookletLine = Object.assign(_IconBookletLine, {
  install: (app: App) => {
    app.component(_IconBookletLine.name, _IconBookletLine);
  }
});

export default IconBookletLine;