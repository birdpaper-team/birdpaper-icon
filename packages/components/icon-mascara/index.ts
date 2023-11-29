import type { App } from 'vue';
import _IconMascara from './icon-mascara.vue';

const IconMascara = Object.assign(_IconMascara, {
  install: (app: App) => {
    app.component(_IconMascara.name, _IconMascara);
  }
});

export default IconMascara;