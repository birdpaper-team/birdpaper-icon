import type { App } from 'vue';
import _IconHexagonOne from './icon-hexagon-one.vue';

const IconHexagonOne = Object.assign(_IconHexagonOne, {
  install: (app: App) => {
    app.component(_IconHexagonOne.name, _IconHexagonOne);
  }
});

export default IconHexagonOne;