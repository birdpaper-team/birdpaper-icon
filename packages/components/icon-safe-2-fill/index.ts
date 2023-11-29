import type { App } from 'vue';
import _IconSafe2Fill from './icon-safe-2-fill.vue';

const IconSafe2Fill = Object.assign(_IconSafe2Fill, {
  install: (app: App) => {
    app.component(_IconSafe2Fill.name, _IconSafe2Fill);
  }
});

export default IconSafe2Fill;