import type { App } from 'vue';
import _IconSparklingLine from './icon-sparkling-line.vue';

const IconSparklingLine = Object.assign(_IconSparklingLine, {
  install: (app: App) => {
    app.component(_IconSparklingLine.name, _IconSparklingLine);
  }
});

export default IconSparklingLine;