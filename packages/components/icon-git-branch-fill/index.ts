import type { App } from 'vue';
import _IconGitBranchFill from './icon-git-branch-fill.vue';

const IconGitBranchFill = Object.assign(_IconGitBranchFill, {
  install: (app: App) => {
    app.component(_IconGitBranchFill.name, _IconGitBranchFill);
  }
});

export default IconGitBranchFill;