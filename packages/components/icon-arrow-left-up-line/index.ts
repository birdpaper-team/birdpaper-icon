import type { App } from 'vue';
import _IconArrowLeftUpLine from './icon-arrow-left-up-line.vue';

const IconArrowLeftUpLine = Object.assign(_IconArrowLeftUpLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftUpLine.name, _IconArrowLeftUpLine);
  }
});

export default IconArrowLeftUpLine;