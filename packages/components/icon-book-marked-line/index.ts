import type { App } from 'vue';
import _IconBookMarkedLine from './icon-book-marked-line.vue';

const IconBookMarkedLine = Object.assign(_IconBookMarkedLine, {
  install: (app: App) => {
    app.component(_IconBookMarkedLine.name, _IconBookMarkedLine);
  }
});

export default IconBookMarkedLine;