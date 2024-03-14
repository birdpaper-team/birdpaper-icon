import type { App } from 'vue';
import _IconStickyNote2Fill2 from './icon-sticky-note-2-fill-2.vue';

const IconStickyNote2Fill2 = Object.assign(_IconStickyNote2Fill2, {
  install: (app: App) => {
    app.component(_IconStickyNote2Fill2.name, _IconStickyNote2Fill2);
  }
});

export default IconStickyNote2Fill2;