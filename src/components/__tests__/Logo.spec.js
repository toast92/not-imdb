import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Logo from '../Logo.vue';

describe('Logo', () => {
  it('renders properly', () => {
    const wrapper = mount(Logo, { props: { name: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  });
});
