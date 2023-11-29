import type { App } from 'vue';
import _IconTShirtLine from './icon-t-shirt-line.vue';

const IconTShirtLine = Object.assign(_IconTShirtLine, {
  install: (app: App) => {
    app.component(_IconTShirtLine.name, _IconTShirtLine);
  }
});

export default IconTShirtLine;