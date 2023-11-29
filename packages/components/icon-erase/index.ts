import type { App } from 'vue';
import _IconErase from './icon-erase.vue';

const IconErase = Object.assign(_IconErase, {
  install: (app: App) => {
    app.component(_IconErase.name, _IconErase);
  }
});

export default IconErase;