import type { App } from 'vue';
import _IconAddBoxLine from './icon-add-box-line.vue';

const IconAddBoxLine = Object.assign(_IconAddBoxLine, {
  install: (app: App) => {
    app.component(_IconAddBoxLine.name, _IconAddBoxLine);
  }
});

export default IconAddBoxLine;