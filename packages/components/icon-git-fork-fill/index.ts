import type { App } from 'vue';
import _IconGitForkFill from './icon-git-fork-fill.vue';

const IconGitForkFill = Object.assign(_IconGitForkFill, {
  install: (app: App) => {
    app.component(_IconGitForkFill.name, _IconGitForkFill);
  }
});

export default IconGitForkFill;