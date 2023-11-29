import type { App } from 'vue';
import _IconWomenLine from './icon-women-line.vue';

const IconWomenLine = Object.assign(_IconWomenLine, {
  install: (app: App) => {
    app.component(_IconWomenLine.name, _IconWomenLine);
  }
});

export default IconWomenLine;