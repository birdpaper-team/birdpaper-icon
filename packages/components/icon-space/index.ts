import type { App } from 'vue';
import _IconSpace from './icon-space.vue';

const IconSpace = Object.assign(_IconSpace, {
  install: (app: App) => {
    app.component(_IconSpace.name, _IconSpace);
  }
});

export default IconSpace;