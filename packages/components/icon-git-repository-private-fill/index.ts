import type { App } from 'vue';
import _IconGitRepositoryPrivateFill from './icon-git-repository-private-fill.vue';

const IconGitRepositoryPrivateFill = Object.assign(_IconGitRepositoryPrivateFill, {
  install: (app: App) => {
    app.component(_IconGitRepositoryPrivateFill.name, _IconGitRepositoryPrivateFill);
  }
});

export default IconGitRepositoryPrivateFill;