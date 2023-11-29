import type { App } from 'vue';
import _IconOpenSourceLine from './icon-open-source-line.vue';

const IconOpenSourceLine = Object.assign(_IconOpenSourceLine, {
  install: (app: App) => {
    app.component(_IconOpenSourceLine.name, _IconOpenSourceLine);
  }
});

export default IconOpenSourceLine;