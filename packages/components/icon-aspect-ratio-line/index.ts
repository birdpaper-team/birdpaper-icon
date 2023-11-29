import type { App } from 'vue';
import _IconAspectRatioLine from './icon-aspect-ratio-line.vue';

const IconAspectRatioLine = Object.assign(_IconAspectRatioLine, {
  install: (app: App) => {
    app.component(_IconAspectRatioLine.name, _IconAspectRatioLine);
  }
});

export default IconAspectRatioLine;