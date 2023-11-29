import type { App } from 'vue';
import _IconIdCardV from './icon-id-card-v.vue';

const IconIdCardV = Object.assign(_IconIdCardV, {
  install: (app: App) => {
    app.component(_IconIdCardV.name, _IconIdCardV);
  }
});

export default IconIdCardV;