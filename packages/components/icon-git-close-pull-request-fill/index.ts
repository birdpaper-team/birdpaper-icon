import type { App } from 'vue';
import _IconGitClosePullRequestFill from './icon-git-close-pull-request-fill.vue';

const IconGitClosePullRequestFill = Object.assign(_IconGitClosePullRequestFill, {
  install: (app: App) => {
    app.component(_IconGitClosePullRequestFill.name, _IconGitClosePullRequestFill);
  }
});

export default IconGitClosePullRequestFill;