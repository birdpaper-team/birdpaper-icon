import type { App } from 'vue';
import _IconPlayLine from './icon-play-line.vue';

const IconPlayLine = Object.assign(_IconPlayLine, {
  install: (app: App) => {
    app.component(_IconPlayLine.name, _IconPlayLine);
  }
});

export default IconPlayLine;