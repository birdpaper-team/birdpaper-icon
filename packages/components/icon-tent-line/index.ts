import type { App } from 'vue';
import _IconTentLine from './icon-tent-line.vue';

const IconTentLine = Object.assign(_IconTentLine, {
  install: (app: App) => {
    app.component(_IconTentLine.name, _IconTentLine);
  }
});

export default IconTentLine;