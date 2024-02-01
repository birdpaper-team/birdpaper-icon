import type { App } from 'vue';
import _IconStickyNoteAddLine from './icon-sticky-note-add-line.vue';

const IconStickyNoteAddLine = Object.assign(_IconStickyNoteAddLine, {
  install: (app: App) => {
    app.component(_IconStickyNoteAddLine.name, _IconStickyNoteAddLine);
  }
});

export default IconStickyNoteAddLine;