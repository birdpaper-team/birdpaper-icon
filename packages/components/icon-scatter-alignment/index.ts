import type { App } from 'vue';
import _IconScatterAlignment from './icon-scatter-alignment.vue';

const IconScatterAlignment = Object.assign(_IconScatterAlignment, {
  install: (app: App) => {
    app.component(_IconScatterAlignment.name, _IconScatterAlignment);
  }
});

export default IconScatterAlignment;