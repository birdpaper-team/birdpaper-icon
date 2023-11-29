import type { App } from 'vue';
import _IconStickyNote2Fill from './icon-sticky-note-2-fill.vue';

const IconStickyNote2Fill = Object.assign(_IconStickyNote2Fill, {
  install: (app: App) => {
    app.component(_IconStickyNote2Fill.name, _IconStickyNote2Fill);
  }
});

export default IconStickyNote2Fill;