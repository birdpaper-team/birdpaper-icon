import type { App } from 'vue';
import _IconGitPrDraftFill from './icon-git-pr-draft-fill.vue';

const IconGitPrDraftFill = Object.assign(_IconGitPrDraftFill, {
  install: (app: App) => {
    app.component(_IconGitPrDraftFill.name, _IconGitPrDraftFill);
  }
});

export default IconGitPrDraftFill;