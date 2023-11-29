import type { App } from 'vue';
import _IconBachelorCapTwo from './icon-bachelor-cap-two.vue';

const IconBachelorCapTwo = Object.assign(_IconBachelorCapTwo, {
  install: (app: App) => {
    app.component(_IconBachelorCapTwo.name, _IconBachelorCapTwo);
  }
});

export default IconBachelorCapTwo;