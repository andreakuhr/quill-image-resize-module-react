import { BaseModule } from './BaseModule';

class CustomImageModal extends BaseModule {
  constructor(resizer) {
    super(resizer);

    this.overlay = resizer.overlay;
    this.img = resizer.img;
    this.options = resizer.options;
    this.requestUpdate = resizer.onUpdate;
  }

  onCreate = () => { console.log('andrea'); };
}

export default CustomImageModal;