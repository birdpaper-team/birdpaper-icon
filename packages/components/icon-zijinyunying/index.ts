import type { App } from 'vue';
import _IconZijinyunying from './icon-zijinyunying.vue';

const IconZijinyunying = Object.assign(_IconZijinyunying, {
  install: (app: App) => {
    app.component(_IconZijinyunying.name, _IconZijinyunying);
  }
});

export default IconZijinyunying;