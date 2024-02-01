import type { App } from 'vue';
import _IconGitPrDraftLine from './icon-git-pr-draft-line.vue';

const IconGitPrDraftLine = Object.assign(_IconGitPrDraftLine, {
  install: (app: App) => {
    app.component(_IconGitPrDraftLine.name, _IconGitPrDraftLine);
  }
});

export default IconGitPrDraftLine;