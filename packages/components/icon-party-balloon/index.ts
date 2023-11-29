import type { App } from 'vue';
import _IconPartyBalloon from './icon-party-balloon.vue';

const IconPartyBalloon = Object.assign(_IconPartyBalloon, {
  install: (app: App) => {
    app.component(_IconPartyBalloon.name, _IconPartyBalloon);
  }
});

export default IconPartyBalloon;