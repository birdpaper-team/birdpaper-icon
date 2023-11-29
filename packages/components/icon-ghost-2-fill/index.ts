import type { App } from 'vue';
import _IconGhost2Fill from './icon-ghost-2-fill.vue';

const IconGhost2Fill = Object.assign(_IconGhost2Fill, {
  install: (app: App) => {
    app.component(_IconGhost2Fill.name, _IconGhost2Fill);
  }
});

export default IconGhost2Fill;