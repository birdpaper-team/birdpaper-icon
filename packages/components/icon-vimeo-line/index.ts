import type { App } from 'vue';
import _IconVimeoLine from './icon-vimeo-line.vue';

const IconVimeoLine = Object.assign(_IconVimeoLine, {
  install: (app: App) => {
    app.component(_IconVimeoLine.name, _IconVimeoLine);
  }
});

export default IconVimeoLine;