import type { App } from 'vue';
import _IconGitCommitLine from './icon-git-commit-line.vue';

const IconGitCommitLine = Object.assign(_IconGitCommitLine, {
  install: (app: App) => {
    app.component(_IconGitCommitLine.name, _IconGitCommitLine);
  }
});

export default IconGitCommitLine;