import type { App } from 'vue';
import _IconOilIndustry from './icon-oil-industry.vue';

const IconOilIndustry = Object.assign(_IconOilIndustry, {
  install: (app: App) => {
    app.component(_IconOilIndustry.name, _IconOilIndustry);
  }
});

export default IconOilIndustry;