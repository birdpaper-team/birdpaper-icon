import type { App } from 'vue';
import _IconVideoOnLine from './icon-video-on-line.vue';

const IconVideoOnLine = Object.assign(_IconVideoOnLine, {
  install: (app: App) => {
    app.component(_IconVideoOnLine.name, _IconVideoOnLine);
  }
});

export default IconVideoOnLine;