import type { App } from 'vue';
import _IconBook3Line from './icon-book-3-line.vue';

const IconBook3Line = Object.assign(_IconBook3Line, {
  install: (app: App) => {
    app.component(_IconBook3Line.name, _IconBook3Line);
  }
});

export default IconBook3Line;