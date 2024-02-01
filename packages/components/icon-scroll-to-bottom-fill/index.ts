import type { App } from 'vue';
import _IconScrollToBottomFill from './icon-scroll-to-bottom-fill.vue';

const IconScrollToBottomFill = Object.assign(_IconScrollToBottomFill, {
  install: (app: App) => {
    app.component(_IconScrollToBottomFill.name, _IconScrollToBottomFill);
  }
});

export default IconScrollToBottomFill;