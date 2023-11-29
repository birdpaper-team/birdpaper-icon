import type { App } from 'vue';
import _IconFileShredFill from './icon-file-shred-fill.vue';

const IconFileShredFill = Object.assign(_IconFileShredFill, {
  install: (app: App) => {
    app.component(_IconFileShredFill.name, _IconFileShredFill);
  }
});

export default IconFileShredFill;