import type { App } from 'vue';
import _IconShirtLine from './icon-shirt-line.vue';

const IconShirtLine = Object.assign(_IconShirtLine, {
  install: (app: App) => {
    app.component(_IconShirtLine.name, _IconShirtLine);
  }
});

export default IconShirtLine;