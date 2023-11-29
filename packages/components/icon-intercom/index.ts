import type { App } from 'vue';
import _IconIntercom from './icon-intercom.vue';

const IconIntercom = Object.assign(_IconIntercom, {
  install: (app: App) => {
    app.component(_IconIntercom.name, _IconIntercom);
  }
});

export default IconIntercom;