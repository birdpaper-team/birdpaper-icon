import type { App } from 'vue';
import _IconStickyNote2Line from './icon-sticky-note-2-line.vue';

const IconStickyNote2Line = Object.assign(_IconStickyNote2Line, {
  install: (app: App) => {
    app.component(_IconStickyNote2Line.name, _IconStickyNote2Line);
  }
});

export default IconStickyNote2Line;