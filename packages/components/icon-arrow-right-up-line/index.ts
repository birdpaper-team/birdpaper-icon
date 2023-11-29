import type { App } from 'vue';
import _IconArrowRightUpLine from './icon-arrow-right-up-line.vue';

const IconArrowRightUpLine = Object.assign(_IconArrowRightUpLine, {
  install: (app: App) => {
    app.component(_IconArrowRightUpLine.name, _IconArrowRightUpLine);
  }
});

export default IconArrowRightUpLine;