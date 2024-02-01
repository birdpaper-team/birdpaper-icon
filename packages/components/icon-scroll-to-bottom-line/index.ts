import type { App } from 'vue';
import _IconScrollToBottomLine from './icon-scroll-to-bottom-line.vue';

const IconScrollToBottomLine = Object.assign(_IconScrollToBottomLine, {
  install: (app: App) => {
    app.component(_IconScrollToBottomLine.name, _IconScrollToBottomLine);
  }
});

export default IconScrollToBottomLine;