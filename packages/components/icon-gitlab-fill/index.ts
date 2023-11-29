import type { App } from 'vue';
import _IconGitlabFill from './icon-gitlab-fill.vue';

const IconGitlabFill = Object.assign(_IconGitlabFill, {
  install: (app: App) => {
    app.component(_IconGitlabFill.name, _IconGitlabFill);
  }
});

export default IconGitlabFill;