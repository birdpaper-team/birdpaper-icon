import type { App } from 'vue';
import _IconVkLine from './icon-vk-line.vue';

const IconVkLine = Object.assign(_IconVkLine, {
  install: (app: App) => {
    app.component(_IconVkLine.name, _IconVkLine);
  }
});

export default IconVkLine;