import type { App } from 'vue';
import _IconProhibited2Fill from './icon-prohibited-2-fill.vue';

const IconProhibited2Fill = Object.assign(_IconProhibited2Fill, {
  install: (app: App) => {
    app.component(_IconProhibited2Fill.name, _IconProhibited2Fill);
  }
});

export default IconProhibited2Fill;