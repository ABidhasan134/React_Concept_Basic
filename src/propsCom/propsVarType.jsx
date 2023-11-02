import React from 'react'
import PropTypes from 'prop-types';

const Propstest = (props) => {
    console.log(props.name);
  return (
    <div>
      
    </div>
  )
};
Propstest.propTypes={
    //key: value;
    name: PropTypes.number,
    id: PropTypes.string,
}


export default Propstest
