import PropTypes from 'prop-types';
import Contact from '../pages/contact';
import React from 'react';

const Jumbotron = ({ phrase, subtitle }) => (
  <div className="jumbotron text-center">
    <h1 className="display-4 jumbotronMain">{phrase}</h1>
    <p className="lead">{subtitle}</p>
    <Contact />
  </div>
);

Jumbotron.propTypes = {
  phrase: PropTypes.string,
  subtitle: PropTypes.string,
};

Jumbotron.defaultProps = {
  phrase: '',
  subtitle: '',
};

export default Jumbotron;
