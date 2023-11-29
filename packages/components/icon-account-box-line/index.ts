import type { App } from 'vue';
import _IconAccountBoxLine from './icon-account-box-line.vue';

const IconAccountBoxLine = Object.assign(_IconAccountBoxLine, {
  install: (app: App) => {
    app.component(_IconAccountBoxLine.name, _IconAccountBoxLine);
  }
});

export default IconAccountBoxLine;