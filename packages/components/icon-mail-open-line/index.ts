import type { App } from 'vue';
import _IconMailOpenLine from './icon-mail-open-line.vue';

const IconMailOpenLine = Object.assign(_IconMailOpenLine, {
  install: (app: App) => {
    app.component(_IconMailOpenLine.name, _IconMailOpenLine);
  }
});

export default IconMailOpenLine;