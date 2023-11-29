import type { App } from 'vue';
import _IconTBoxLine from './icon-t-box-line.vue';

const IconTBoxLine = Object.assign(_IconTBoxLine, {
  install: (app: App) => {
    app.component(_IconTBoxLine.name, _IconTBoxLine);
  }
});

export default IconTBoxLine;