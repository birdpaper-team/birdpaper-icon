import type { App } from 'vue';
import _IconMickeyLine from './icon-mickey-line.vue';

const IconMickeyLine = Object.assign(_IconMickeyLine, {
  install: (app: App) => {
    app.component(_IconMickeyLine.name, _IconMickeyLine);
  }
});

export default IconMickeyLine;