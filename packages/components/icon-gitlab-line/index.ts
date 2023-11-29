import type { App } from 'vue';
import _IconGitlabLine from './icon-gitlab-line.vue';

const IconGitlabLine = Object.assign(_IconGitlabLine, {
  install: (app: App) => {
    app.component(_IconGitlabLine.name, _IconGitlabLine);
  }
});

export default IconGitlabLine;