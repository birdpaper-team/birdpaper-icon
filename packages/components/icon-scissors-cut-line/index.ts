import type { App } from 'vue';
import _IconScissorsCutLine from './icon-scissors-cut-line.vue';

const IconScissorsCutLine = Object.assign(_IconScissorsCutLine, {
  install: (app: App) => {
    app.component(_IconScissorsCutLine.name, _IconScissorsCutLine);
  }
});

export default IconScissorsCutLine;