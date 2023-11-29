import type { App } from 'vue';
import _IconSocks from './icon-socks.vue';

const IconSocks = Object.assign(_IconSocks, {
  install: (app: App) => {
    app.component(_IconSocks.name, _IconSocks);
  }
});

export default IconSocks;