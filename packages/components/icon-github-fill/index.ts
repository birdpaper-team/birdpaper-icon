import type { App } from 'vue';
import _IconGithubFill from './icon-github-fill.vue';

const IconGithubFill = Object.assign(_IconGithubFill, {
  install: (app: App) => {
    app.component(_IconGithubFill.name, _IconGithubFill);
  }
});

export default IconGithubFill;