import React from 'react'
import { render } from '@testing-library/react';
import { TalksList } from './TalksList';

import { talks } from '../../Data'

describe('TalksList', () => {
  it('should render a list of talks', () => {
    const { container } = render(<TalksList talks={talks} />);
    expect(container).not.toBeEmpty()
  })
})