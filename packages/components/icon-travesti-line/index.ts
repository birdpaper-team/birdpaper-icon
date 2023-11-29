import type { App } from 'vue';
import _IconTravestiLine from './icon-travesti-line.vue';

const IconTravestiLine = Object.assign(_IconTravestiLine, {
  install: (app: App) => {
    app.component(_IconTravestiLine.name, _IconTravestiLine);
  }
});

export default IconTravestiLine;