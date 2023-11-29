import type { App } from 'vue';
import _IconGitRepositoryLine from './icon-git-repository-line.vue';

const IconGitRepositoryLine = Object.assign(_IconGitRepositoryLine, {
  install: (app: App) => {
    app.component(_IconGitRepositoryLine.name, _IconGitRepositoryLine);
  }
});

export default IconGitRepositoryLine;