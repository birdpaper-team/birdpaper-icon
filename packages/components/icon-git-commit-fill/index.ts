import type { App } from 'vue';
import _IconGitCommitFill from './icon-git-commit-fill.vue';

const IconGitCommitFill = Object.assign(_IconGitCommitFill, {
  install: (app: App) => {
    app.component(_IconGitCommitFill.name, _IconGitCommitFill);
  }
});

export default IconGitCommitFill;