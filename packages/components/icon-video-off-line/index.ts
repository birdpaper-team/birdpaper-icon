import type { App } from 'vue';
import _IconVideoOffLine from './icon-video-off-line.vue';

const IconVideoOffLine = Object.assign(_IconVideoOffLine, {
  install: (app: App) => {
    app.component(_IconVideoOffLine.name, _IconVideoOffLine);
  }
});

export default IconVideoOffLine;