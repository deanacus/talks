import React from 'react';
import PropTypes from 'prop-types';

import { Talk } from '../'

export const TalksList = ({talks}) => {
  return (
    <section id="talks-list">
      {
        talks.map( talk => <Talk key={talk.id} talk={talk} />)
      }
    </section>
  )
}

TalksList.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Unique ID for the talk
     */
    id: PropTypes.number,
    /**
     * The title of the talk
     */
    title: PropTypes.string,
    /**
     * The date the talk was given
     */
    date: PropTypes.string,
    /**
     * The place where the talk was given
     */
    location: PropTypes.string,
    /**
     * The event the talk was given at
     */
    event: PropTypes.string,
    /**
     * A summary of the contents/purpose of the talk
     */
    summary: PropTypes.string,
    /**
     * A link to the slide deck or presentation files
     */
    link: PropTypes.string,
  })).isRequired,
}