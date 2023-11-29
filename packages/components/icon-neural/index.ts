import type { App } from 'vue';
import _IconNeural from './icon-neural.vue';

const IconNeural = Object.assign(_IconNeural, {
  install: (app: App) => {
    app.component(_IconNeural.name, _IconNeural);
  }
});

export default IconNeural;