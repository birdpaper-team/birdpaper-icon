import type { App } from 'vue';
import _IconBranch from './icon-branch.vue';

const IconBranch = Object.assign(_IconBranch, {
  install: (app: App) => {
    app.component(_IconBranch.name, _IconBranch);
  }
});

export default IconBranch;