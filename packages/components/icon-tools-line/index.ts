import type { App } from 'vue';
import _IconToolsLine from './icon-tools-line.vue';

const IconToolsLine = Object.assign(_IconToolsLine, {
  install: (app: App) => {
    app.component(_IconToolsLine.name, _IconToolsLine);
  }
});

export default IconToolsLine;