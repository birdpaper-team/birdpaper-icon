import type { App } from 'vue';
import _IconQuillPenFill from './icon-quill-pen-fill.vue';

const IconQuillPenFill = Object.assign(_IconQuillPenFill, {
  install: (app: App) => {
    app.component(_IconQuillPenFill.name, _IconQuillPenFill);
  }
});

export default IconQuillPenFill;