import type { App } from 'vue';
import _IconGitClosePullRequestLine from './icon-git-close-pull-request-line.vue';

const IconGitClosePullRequestLine = Object.assign(_IconGitClosePullRequestLine, {
  install: (app: App) => {
    app.component(_IconGitClosePullRequestLine.name, _IconGitClosePullRequestLine);
  }
});

export default IconGitClosePullRequestLine;