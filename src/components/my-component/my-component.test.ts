import { expect, test } from 'vitest'

import './my-component.tsx'

test('should render component correctly', async () => {
    const cmp = document.createElement('my-component')
    cmp.setAttribute('first', 'Stencil')
    cmp.setAttribute('last', `'Don't call me a framework' JS`)
    document.body.appendChild(cmp)

    await new Promise((resolve) => requestIdleCallback(resolve))
    expect(cmp.shadowRoot?.querySelector('div')?.innerText)
        .toBe(`Hello, World! I'm Stencil 'Don't call me a framework' JS`)
})
