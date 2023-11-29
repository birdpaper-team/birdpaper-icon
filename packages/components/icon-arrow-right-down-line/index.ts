import type { App } from 'vue';
import _IconArrowRightDownLine from './icon-arrow-right-down-line.vue';

const IconArrowRightDownLine = Object.assign(_IconArrowRightDownLine, {
  install: (app: App) => {
    app.component(_IconArrowRightDownLine.name, _IconArrowRightDownLine);
  }
});

export default IconArrowRightDownLine;