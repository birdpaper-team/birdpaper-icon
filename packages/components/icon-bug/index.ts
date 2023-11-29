import type { App } from 'vue';
import _IconBug from './icon-bug.vue';

const IconBug = Object.assign(_IconBug, {
  install: (app: App) => {
    app.component(_IconBug.name, _IconBug);
  }
});

export default IconBug;