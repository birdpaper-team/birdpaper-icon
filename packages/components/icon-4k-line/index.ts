import type { App } from 'vue';
import _Icon4kLine from './icon-4k-line.vue';

const Icon4kLine = Object.assign(_Icon4kLine, {
  install: (app: App) => {
    app.component(_Icon4kLine.name, _Icon4kLine);
  }
});

export default Icon4kLine;