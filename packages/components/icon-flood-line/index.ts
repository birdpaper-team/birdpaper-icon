import type { App } from 'vue';
import _IconFloodLine from './icon-flood-line.vue';

const IconFloodLine = Object.assign(_IconFloodLine, {
  install: (app: App) => {
    app.component(_IconFloodLine.name, _IconFloodLine);
  }
});

export default IconFloodLine;