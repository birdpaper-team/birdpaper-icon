import type { App } from 'vue';
import _IconGridSixteen from './icon-grid-sixteen.vue';

const IconGridSixteen = Object.assign(_IconGridSixteen, {
  install: (app: App) => {
    app.component(_IconGridSixteen.name, _IconGridSixteen);
  }
});

export default IconGridSixteen;