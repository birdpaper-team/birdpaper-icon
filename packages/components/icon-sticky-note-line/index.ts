import type { App } from 'vue';
import _IconStickyNoteLine from './icon-sticky-note-line.vue';

const IconStickyNoteLine = Object.assign(_IconStickyNoteLine, {
  install: (app: App) => {
    app.component(_IconStickyNoteLine.name, _IconStickyNoteLine);
  }
});

export default IconStickyNoteLine;