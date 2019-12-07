import React from 'react'
import { render } from '@testing-library/react';
import { Talk } from './Talk'

describe('Talk', () => {
  it('should render', () => {
    const mockTalk =  {
      id: 1,
      title: 'An Intro to IntersectionObserver',
      summary: 'Introducing the IntersectionObserver API by using it to build a simple script to lazy load images as they scroll into view',
      date: '2019-06-12',
      location: 'Compare The Market',
      event: 'Front End Learning Session',
      link: '/intersection-observer-ctm/',
    };

    const { container } = render(<Talk talk={mockTalk} />);
    expect(container).not.toBeEmpty()
  })
})