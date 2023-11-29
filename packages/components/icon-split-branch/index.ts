import type { App } from 'vue';
import _IconSplitBranch from './icon-split-branch.vue';

const IconSplitBranch = Object.assign(_IconSplitBranch, {
  install: (app: App) => {
    app.component(_IconSplitBranch.name, _IconSplitBranch);
  }
});

export default IconSplitBranch;