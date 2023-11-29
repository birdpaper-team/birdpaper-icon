import type { App } from 'vue';
import _IconParenthesesFill from './icon-parentheses-fill.vue';

const IconParenthesesFill = Object.assign(_IconParenthesesFill, {
  install: (app: App) => {
    app.component(_IconParenthesesFill.name, _IconParenthesesFill);
  }
});

export default IconParenthesesFill;