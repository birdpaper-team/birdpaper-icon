import type { App } from 'vue';
import _IconBranchOne from './icon-branch-one.vue';

const IconBranchOne = Object.assign(_IconBranchOne, {
  install: (app: App) => {
    app.component(_IconBranchOne.name, _IconBranchOne);
  }
});

export default IconBranchOne;