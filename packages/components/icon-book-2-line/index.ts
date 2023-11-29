import type { App } from 'vue';
import _IconBook2Line from './icon-book-2-line.vue';

const IconBook2Line = Object.assign(_IconBook2Line, {
  install: (app: App) => {
    app.component(_IconBook2Line.name, _IconBook2Line);
  }
});

export default IconBook2Line;