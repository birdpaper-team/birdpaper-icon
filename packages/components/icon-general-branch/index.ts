import type { App } from 'vue';
import _IconGeneralBranch from './icon-general-branch.vue';

const IconGeneralBranch = Object.assign(_IconGeneralBranch, {
  install: (app: App) => {
    app.component(_IconGeneralBranch.name, _IconGeneralBranch);
  }
});

export default IconGeneralBranch;