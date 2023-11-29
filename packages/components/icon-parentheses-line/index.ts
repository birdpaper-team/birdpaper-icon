import type { App } from 'vue';
import _IconParenthesesLine from './icon-parentheses-line.vue';

const IconParenthesesLine = Object.assign(_IconParenthesesLine, {
  install: (app: App) => {
    app.component(_IconParenthesesLine.name, _IconParenthesesLine);
  }
});

export default IconParenthesesLine;