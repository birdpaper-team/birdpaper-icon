import type { App } from 'vue';
import _IconTextarea from './icon-textarea.vue';

const IconTextarea = Object.assign(_IconTextarea, {
  install: (app: App) => {
    app.component(_IconTextarea.name, _IconTextarea);
  }
});

export default IconTextarea;