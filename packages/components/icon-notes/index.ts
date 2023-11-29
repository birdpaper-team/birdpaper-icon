import type { App } from 'vue';
import _IconNotes from './icon-notes.vue';

const IconNotes = Object.assign(_IconNotes, {
  install: (app: App) => {
    app.component(_IconNotes.name, _IconNotes);
  }
});

export default IconNotes;