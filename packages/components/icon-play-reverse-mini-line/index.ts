import type { App } from 'vue';
import _IconPlayReverseMiniLine from './icon-play-reverse-mini-line.vue';

const IconPlayReverseMiniLine = Object.assign(_IconPlayReverseMiniLine, {
  install: (app: App) => {
    app.component(_IconPlayReverseMiniLine.name, _IconPlayReverseMiniLine);
  }
});

export default IconPlayReverseMiniLine;