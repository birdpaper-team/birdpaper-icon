import type { App } from 'vue';
import _IconCredit from './icon-credit.vue';

const IconCredit = Object.assign(_IconCredit, {
  install: (app: App) => {
    app.component(_IconCredit.name, _IconCredit);
  }
});

export default IconCredit;