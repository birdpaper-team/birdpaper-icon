import type { App } from 'vue';
import _IconTextSnippet from './icon-text-snippet.vue';

const IconTextSnippet = Object.assign(_IconTextSnippet, {
  install: (app: App) => {
    app.component(_IconTextSnippet.name, _IconTextSnippet);
  }
});

export default IconTextSnippet;