import type { App } from 'vue';
import _IconGitRepositoryFill from './icon-git-repository-fill.vue';

const IconGitRepositoryFill = Object.assign(_IconGitRepositoryFill, {
  install: (app: App) => {
    app.component(_IconGitRepositoryFill.name, _IconGitRepositoryFill);
  }
});

export default IconGitRepositoryFill;