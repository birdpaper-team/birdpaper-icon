import type { App } from 'vue';
import _IconVirusLine from './icon-virus-line.vue';

const IconVirusLine = Object.assign(_IconVirusLine, {
  install: (app: App) => {
    app.component(_IconVirusLine.name, _IconVirusLine);
  }
});

export default IconVirusLine;