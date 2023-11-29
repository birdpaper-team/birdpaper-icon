import type { App } from 'vue';
import _IconConsume from './icon-consume.vue';

const IconConsume = Object.assign(_IconConsume, {
  install: (app: App) => {
    app.component(_IconConsume.name, _IconConsume);
  }
});

export default IconConsume;