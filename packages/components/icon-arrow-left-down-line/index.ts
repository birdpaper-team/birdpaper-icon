import type { App } from 'vue';
import _IconArrowLeftDownLine from './icon-arrow-left-down-line.vue';

const IconArrowLeftDownLine = Object.assign(_IconArrowLeftDownLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftDownLine.name, _IconArrowLeftDownLine);
  }
});

export default IconArrowLeftDownLine;