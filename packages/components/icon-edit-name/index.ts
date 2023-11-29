import type { App } from 'vue';
import _IconEditName from './icon-edit-name.vue';

const IconEditName = Object.assign(_IconEditName, {
  install: (app: App) => {
    app.component(_IconEditName.name, _IconEditName);
  }
});

export default IconEditName;