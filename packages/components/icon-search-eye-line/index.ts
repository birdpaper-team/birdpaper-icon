import type { App } from 'vue';
import _IconSearchEyeLine from './icon-search-eye-line.vue';

const IconSearchEyeLine = Object.assign(_IconSearchEyeLine, {
  install: (app: App) => {
    app.component(_IconSearchEyeLine.name, _IconSearchEyeLine);
  }
});

export default IconSearchEyeLine;