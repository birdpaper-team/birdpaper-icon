import type { App } from 'vue';
import _IconFocus2Fill from './icon-focus-2-fill.vue';

const IconFocus2Fill = Object.assign(_IconFocus2Fill, {
  install: (app: App) => {
    app.component(_IconFocus2Fill.name, _IconFocus2Fill);
  }
});

export default IconFocus2Fill;