import type { App } from 'vue';
import _IconBookOpenLine from './icon-book-open-line.vue';

const IconBookOpenLine = Object.assign(_IconBookOpenLine, {
  install: (app: App) => {
    app.component(_IconBookOpenLine.name, _IconBookOpenLine);
  }
});

export default IconBookOpenLine;