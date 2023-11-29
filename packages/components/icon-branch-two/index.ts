import type { App } from 'vue';
import _IconBranchTwo from './icon-branch-two.vue';

const IconBranchTwo = Object.assign(_IconBranchTwo, {
  install: (app: App) => {
    app.component(_IconBranchTwo.name, _IconBranchTwo);
  }
});

export default IconBranchTwo;