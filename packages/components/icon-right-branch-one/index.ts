import type { App } from 'vue';
import _IconRightBranchOne from './icon-right-branch-one.vue';

const IconRightBranchOne = Object.assign(_IconRightBranchOne, {
  install: (app: App) => {
    app.component(_IconRightBranchOne.name, _IconRightBranchOne);
  }
});

export default IconRightBranchOne;