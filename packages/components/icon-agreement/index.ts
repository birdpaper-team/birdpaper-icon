import type { App } from 'vue';
import _IconAgreement from './icon-agreement.vue';

const IconAgreement = Object.assign(_IconAgreement, {
  install: (app: App) => {
    app.component(_IconAgreement.name, _IconAgreement);
  }
});

export default IconAgreement;