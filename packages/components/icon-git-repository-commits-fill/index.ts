import type { App } from 'vue';
import _IconGitRepositoryCommitsFill from './icon-git-repository-commits-fill.vue';

const IconGitRepositoryCommitsFill = Object.assign(_IconGitRepositoryCommitsFill, {
  install: (app: App) => {
    app.component(_IconGitRepositoryCommitsFill.name, _IconGitRepositoryCommitsFill);
  }
});

export default IconGitRepositoryCommitsFill;