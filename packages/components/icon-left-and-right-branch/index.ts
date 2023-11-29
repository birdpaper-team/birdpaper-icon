import type { App } from 'vue';
import _IconLeftAndRightBranch from './icon-left-and-right-branch.vue';

const IconLeftAndRightBranch = Object.assign(_IconLeftAndRightBranch, {
  install: (app: App) => {
    app.component(_IconLeftAndRightBranch.name, _IconLeftAndRightBranch);
  }
});

export default IconLeftAndRightBranch;