import type { App } from 'vue';
import _IconArrowGoForwardFill from './icon-arrow-go-forward-fill.vue';

const IconArrowGoForwardFill = Object.assign(_IconArrowGoForwardFill, {
  install: (app: App) => {
    app.component(_IconArrowGoForwardFill.name, _IconArrowGoForwardFill);
  }
});

export default IconArrowGoForwardFill;