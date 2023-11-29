import type { App } from 'vue';
import _IconTvLine from './icon-tv-line.vue';

const IconTvLine = Object.assign(_IconTvLine, {
  install: (app: App) => {
    app.component(_IconTvLine.name, _IconTvLine);
  }
});

export default IconTvLine;