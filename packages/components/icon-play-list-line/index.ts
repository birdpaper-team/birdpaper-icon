import type { App } from 'vue';
import _IconPlayListLine from './icon-play-list-line.vue';

const IconPlayListLine = Object.assign(_IconPlayListLine, {
  install: (app: App) => {
    app.component(_IconPlayListLine.name, _IconPlayListLine);
  }
});

export default IconPlayListLine;