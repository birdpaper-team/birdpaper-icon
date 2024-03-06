import type { App } from 'vue';
import _IconIdCardFill from './icon-id-card-fill.vue';

const IconIdCardFill = Object.assign(_IconIdCardFill, {
  install: (app: App) => {
    app.component(_IconIdCardFill.name, _IconIdCardFill);
  }
});

export default IconIdCardFill;