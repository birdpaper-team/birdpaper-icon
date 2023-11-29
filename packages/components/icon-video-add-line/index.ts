import type { App } from 'vue';
import _IconVideoAddLine from './icon-video-add-line.vue';

const IconVideoAddLine = Object.assign(_IconVideoAddLine, {
  install: (app: App) => {
    app.component(_IconVideoAddLine.name, _IconVideoAddLine);
  }
});

export default IconVideoAddLine;