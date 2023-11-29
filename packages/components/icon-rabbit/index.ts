import type { App } from 'vue';
import _IconRabbit from './icon-rabbit.vue';

const IconRabbit = Object.assign(_IconRabbit, {
  install: (app: App) => {
    app.component(_IconRabbit.name, _IconRabbit);
  }
});

export default IconRabbit;