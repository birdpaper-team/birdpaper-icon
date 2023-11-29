import type { App } from 'vue';
import _IconThunderstormOne from './icon-thunderstorm-one.vue';

const IconThunderstormOne = Object.assign(_IconThunderstormOne, {
  install: (app: App) => {
    app.component(_IconThunderstormOne.name, _IconThunderstormOne);
  }
});

export default IconThunderstormOne;