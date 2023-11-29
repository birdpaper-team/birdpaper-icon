import type { App } from 'vue';
import _IconEfferentFour from './icon-efferent-four.vue';

const IconEfferentFour = Object.assign(_IconEfferentFour, {
  install: (app: App) => {
    app.component(_IconEfferentFour.name, _IconEfferentFour);
  }
});

export default IconEfferentFour;