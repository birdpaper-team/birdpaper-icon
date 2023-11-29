import type { App } from 'vue';
import _IconDraftFill from './icon-draft-fill.vue';

const IconDraftFill = Object.assign(_IconDraftFill, {
  install: (app: App) => {
    app.component(_IconDraftFill.name, _IconDraftFill);
  }
});

export default IconDraftFill;