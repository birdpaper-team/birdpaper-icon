import type { App } from 'vue';
import _IconClosedCaptioningLine from './icon-closed-captioning-line.vue';

const IconClosedCaptioningLine = Object.assign(_IconClosedCaptioningLine, {
  install: (app: App) => {
    app.component(_IconClosedCaptioningLine.name, _IconClosedCaptioningLine);
  }
});

export default IconClosedCaptioningLine;