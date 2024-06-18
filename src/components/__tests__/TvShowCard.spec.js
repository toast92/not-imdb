import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import TvShowCard from '../TvShowCard.vue';

describe('Tv-show card', () => {
  it('renders correctly', () => {
    const wrapper = mount(TvShowCard, {
      props: {
        id: 180,
        name: 'Breaking Bad',
        rating: 9,
        imageSrc: '/image'
      }
    });
    expect(wrapper.text()).toContain('Breaking Bad');
    expect(wrapper.text()).toContain(9);
  });
});
