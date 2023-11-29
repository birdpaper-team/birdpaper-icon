import type { App } from 'vue';
import _IconPlayMiniLine from './icon-play-mini-line.vue';

const IconPlayMiniLine = Object.assign(_IconPlayMiniLine, {
  install: (app: App) => {
    app.component(_IconPlayMiniLine.name, _IconPlayMiniLine);
  }
});

export default IconPlayMiniLine;