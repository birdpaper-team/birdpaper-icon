import type { App } from 'vue';
import _IconArrowGoBackFill from './icon-arrow-go-back-fill.vue';

const IconArrowGoBackFill = Object.assign(_IconArrowGoBackFill, {
  install: (app: App) => {
    app.component(_IconArrowGoBackFill.name, _IconArrowGoBackFill);
  }
});

export default IconArrowGoBackFill;