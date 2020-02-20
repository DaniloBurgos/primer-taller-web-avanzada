import React from 'react';
import PropTypes from 'prop-types';
import './CardNumber.css';

function CardNumber(props) {



  return (
    <div>

      <label>

          Card Number
          <input type="number"></input>

      </label>

    </div>
  );
}


CardNumber.propTypes = {

    number: PropTypes.number,
    onToggle: PropTypes.func,

};

export default CardNumber;