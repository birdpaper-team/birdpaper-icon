import type { App } from 'vue';
import _IconPolaroidFill from './icon-polaroid-fill.vue';

const IconPolaroidFill = Object.assign(_IconPolaroidFill, {
  install: (app: App) => {
    app.component(_IconPolaroidFill.name, _IconPolaroidFill);
  }
});

export default IconPolaroidFill;