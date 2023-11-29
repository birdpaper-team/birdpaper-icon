import type { App } from 'vue';
import _IconTrumpet from './icon-trumpet.vue';

const IconTrumpet = Object.assign(_IconTrumpet, {
  install: (app: App) => {
    app.component(_IconTrumpet.name, _IconTrumpet);
  }
});

export default IconTrumpet;