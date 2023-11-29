import type { App } from 'vue';
import _IconSofaTwo from './icon-sofa-two.vue';

const IconSofaTwo = Object.assign(_IconSofaTwo, {
  install: (app: App) => {
    app.component(_IconSofaTwo.name, _IconSofaTwo);
  }
});

export default IconSofaTwo;