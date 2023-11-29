import type { App } from 'vue';
import _IconSearch2Line from './icon-search-2-line.vue';

const IconSearch2Line = Object.assign(_IconSearch2Line, {
  install: (app: App) => {
    app.component(_IconSearch2Line.name, _IconSearch2Line);
  }
});

export default IconSearch2Line;