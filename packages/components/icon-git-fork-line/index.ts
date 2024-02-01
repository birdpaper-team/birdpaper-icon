import type { App } from 'vue';
import _IconGitForkLine from './icon-git-fork-line.vue';

const IconGitForkLine = Object.assign(_IconGitForkLine, {
  install: (app: App) => {
    app.component(_IconGitForkLine.name, _IconGitForkLine);
  }
});

export default IconGitForkLine;