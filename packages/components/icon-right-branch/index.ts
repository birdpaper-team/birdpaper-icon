import type { App } from 'vue';
import _IconRightBranch from './icon-right-branch.vue';

const IconRightBranch = Object.assign(_IconRightBranch, {
  install: (app: App) => {
    app.component(_IconRightBranch.name, _IconRightBranch);
  }
});

export default IconRightBranch;