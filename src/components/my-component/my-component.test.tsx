/** @jsx createElement */
import { expect, test } from 'vitest'

import { createElement } from '../../utils/jsx'
import './my-component.tsx'

test('should render the component with jsx', async () => {
    const cmp = <my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>
    document.body.appendChild(cmp)
    await new Promise((resolve) => requestIdleCallback(resolve))
    expect(cmp.shadowRoot?.querySelector('div')?.innerText)
        .toBe(`Hello, World! I'm Stencil 'Don't call me a framework' JS`)
})
