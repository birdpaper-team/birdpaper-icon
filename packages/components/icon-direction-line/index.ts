import type { App } from 'vue';
import _IconDirectionLine from './icon-direction-line.vue';

const IconDirectionLine = Object.assign(_IconDirectionLine, {
  install: (app: App) => {
    app.component(_IconDirectionLine.name, _IconDirectionLine);
  }
});

export default IconDirectionLine;