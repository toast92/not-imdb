import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import PageLogo from '../PageLogo.vue';

describe('PageLogo', () => {
  it('renders properly', () => {
    const wrapper = mount(PageLogo, { props: { name: 'Not-IMDB' } });
    expect(wrapper.text()).toContain('Not-IMDB');
  });
});
