import type { App } from 'vue';
import _IconGitMergeFill from './icon-git-merge-fill.vue';

const IconGitMergeFill = Object.assign(_IconGitMergeFill, {
  install: (app: App) => {
    app.component(_IconGitMergeFill.name, _IconGitMergeFill);
  }
});

export default IconGitMergeFill;