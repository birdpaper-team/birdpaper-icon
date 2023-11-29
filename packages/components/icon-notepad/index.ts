import type { App } from 'vue';
import _IconNotepad from './icon-notepad.vue';

const IconNotepad = Object.assign(_IconNotepad, {
  install: (app: App) => {
    app.component(_IconNotepad.name, _IconNotepad);
  }
});

export default IconNotepad;