import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDate = styled.time`
  color: #555;
`;

export const Talk = ({talk}) => (
  <article id={`talk-${talk.id}`}>
    <h2>{talk.title}</h2>
    <p><StyledDate>{new Date(talk.date).toLocaleDateString('en-au')}</StyledDate> {talk.location}: {talk.event}</p>
    <p>{talk.summary}</p>
    <p><a href={talk.link}>Slides</a></p>
  </article>
)

Talk.propTypes = {
  talk: PropTypes.shape({
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
  }).isRequired
}