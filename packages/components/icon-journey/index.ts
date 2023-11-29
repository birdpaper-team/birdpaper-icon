import type { App } from 'vue';
import _IconJourney from './icon-journey.vue';

const IconJourney = Object.assign(_IconJourney, {
  install: (app: App) => {
    app.component(_IconJourney.name, _IconJourney);
  }
});

export default IconJourney;