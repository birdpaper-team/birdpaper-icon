import type { App } from 'vue';
import _IconGitPullRequestFill from './icon-git-pull-request-fill.vue';

const IconGitPullRequestFill = Object.assign(_IconGitPullRequestFill, {
  install: (app: App) => {
    app.component(_IconGitPullRequestFill.name, _IconGitPullRequestFill);
  }
});

export default IconGitPullRequestFill;