import type { App } from 'vue';
import _IconGithub from './icon-github.vue';

const IconGithub = Object.assign(_IconGithub, {
  install: (app: App) => {
    app.component(_IconGithub.name, _IconGithub);
  }
});

export default IconGithub;