import type { App } from 'vue';
import _IconBug2Fill from './icon-bug-2-fill.vue';

const IconBug2Fill = Object.assign(_IconBug2Fill, {
  install: (app: App) => {
    app.component(_IconBug2Fill.name, _IconBug2Fill);
  }
});

export default IconBug2Fill;