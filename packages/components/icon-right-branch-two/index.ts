import type { App } from 'vue';
import _IconRightBranchTwo from './icon-right-branch-two.vue';

const IconRightBranchTwo = Object.assign(_IconRightBranchTwo, {
  install: (app: App) => {
    app.component(_IconRightBranchTwo.name, _IconRightBranchTwo);
  }
});

export default IconRightBranchTwo;