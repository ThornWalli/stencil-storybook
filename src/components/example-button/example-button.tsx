import {
  Component,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h,
  Host,
  Element,
  Mixin,
  Prop
} from '@stencil/core';
import { buttonFactory } from '../mixins/button';

@Component({
  tag: 'example-button',
  formAssociated: true,
  shadow: false,
  scoped: true
})
export class ExampleButton extends Mixin(buttonFactory) {
  @Element() host!: HTMLElement;

  @Prop() iconAlign: 'left' | 'right' = 'left';

  constructor() {
    super();
    this._setupExtend();
  }

  render() {
    return (
      <Host role="button" tabindex={this.disabled ? -1 : 0} aria-disabled={this.disabled ? 'true' : 'false'} onClick={this.handleClick}>
        {this.iconAlign === 'left' ? <slot name="icon"></slot> : null}
        <slot></slot>
        {this.iconAlign === 'right' ? <slot name="icon"></slot> : null}
      </Host>
    );
  }
}
