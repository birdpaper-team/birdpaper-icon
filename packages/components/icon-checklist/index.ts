import type { App } from 'vue';
import _IconChecklist from './icon-checklist.vue';

const IconChecklist = Object.assign(_IconChecklist, {
  install: (app: App) => {
    app.component(_IconChecklist.name, _IconChecklist);
  }
});

export default IconChecklist;