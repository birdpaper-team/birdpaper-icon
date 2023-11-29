import type { App } from 'vue';
import _IconGitRepositoryCommitsLine from './icon-git-repository-commits-line.vue';

const IconGitRepositoryCommitsLine = Object.assign(_IconGitRepositoryCommitsLine, {
  install: (app: App) => {
    app.component(_IconGitRepositoryCommitsLine.name, _IconGitRepositoryCommitsLine);
  }
});

export default IconGitRepositoryCommitsLine;