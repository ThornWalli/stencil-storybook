import { Prop } from '@stencil/core';

export const buttonFactory = Base => {
  class Extend extends Base {
    private internals?: ElementInternals;

    _setupExtend() {
      this.internals = this.host.attachInternals?.();
    }

    @Prop() type: 'button' | 'submit' | 'reset' = 'button';
    @Prop({ reflect: true }) disabled = false;

    public handleClick = () => {
      if (!this.internals || this.type === 'button') return;

      const form = this.internals.form;
      if (form) {
        if (this.type === 'submit') form.requestSubmit();
        if (this.type === 'reset') form.reset();
      }
    };
  }
  return Extend;
};
