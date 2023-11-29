import type { App } from 'vue';
import _IconEditing from './icon-editing.vue';

const IconEditing = Object.assign(_IconEditing, {
  install: (app: App) => {
    app.component(_IconEditing.name, _IconEditing);
  }
});

export default IconEditing;