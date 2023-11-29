import type { App } from 'vue';
import _IconPolaroidLine from './icon-polaroid-line.vue';

const IconPolaroidLine = Object.assign(_IconPolaroidLine, {
  install: (app: App) => {
    app.component(_IconPolaroidLine.name, _IconPolaroidLine);
  }
});

export default IconPolaroidLine;