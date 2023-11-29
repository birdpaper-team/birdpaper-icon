import type { App } from 'vue';
import _IconCodeBrackets from './icon-code-brackets.vue';

const IconCodeBrackets = Object.assign(_IconCodeBrackets, {
  install: (app: App) => {
    app.component(_IconCodeBrackets.name, _IconCodeBrackets);
  }
});

export default IconCodeBrackets;