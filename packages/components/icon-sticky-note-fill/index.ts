import type { App } from 'vue';
import _IconStickyNoteFill from './icon-sticky-note-fill.vue';

const IconStickyNoteFill = Object.assign(_IconStickyNoteFill, {
  install: (app: App) => {
    app.component(_IconStickyNoteFill.name, _IconStickyNoteFill);
  }
});

export default IconStickyNoteFill;