import type { App } from 'vue';
import _IconBloom from './icon-bloom.vue';

const IconBloom = Object.assign(_IconBloom, {
  install: (app: App) => {
    app.component(_IconBloom.name, _IconBloom);
  }
});

export default IconBloom;