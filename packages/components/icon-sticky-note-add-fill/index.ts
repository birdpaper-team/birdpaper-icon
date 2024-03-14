import type { App } from 'vue';
import _IconStickyNoteAddFill from './icon-sticky-note-add-fill.vue';

const IconStickyNoteAddFill = Object.assign(_IconStickyNoteAddFill, {
  install: (app: App) => {
    app.component(_IconStickyNoteAddFill.name, _IconStickyNoteAddFill);
  }
});

export default IconStickyNoteAddFill;