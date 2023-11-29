import type { App } from 'vue';
import _IconGitRepositoryPrivateLine from './icon-git-repository-private-line.vue';

const IconGitRepositoryPrivateLine = Object.assign(_IconGitRepositoryPrivateLine, {
  install: (app: App) => {
    app.component(_IconGitRepositoryPrivateLine.name, _IconGitRepositoryPrivateLine);
  }
});

export default IconGitRepositoryPrivateLine;