import type { App } from 'vue';
import _IconExpandUpDownLine from './icon-expand-up-down-line.vue';

const IconExpandUpDownLine = Object.assign(_IconExpandUpDownLine, {
  install: (app: App) => {
    app.component(_IconExpandUpDownLine.name, _IconExpandUpDownLine);
  }
});

export default IconExpandUpDownLine;