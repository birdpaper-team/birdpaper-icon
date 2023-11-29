import type { App } from 'vue';
import _IconThreadsLine from './icon-threads-line.vue';

const IconThreadsLine = Object.assign(_IconThreadsLine, {
  install: (app: App) => {
    app.component(_IconThreadsLine.name, _IconThreadsLine);
  }
});

export default IconThreadsLine;