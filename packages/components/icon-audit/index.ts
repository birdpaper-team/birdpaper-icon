import type { App } from 'vue';
import _IconAudit from './icon-audit.vue';

const IconAudit = Object.assign(_IconAudit, {
  install: (app: App) => {
    app.component(_IconAudit.name, _IconAudit);
  }
});

export default IconAudit;