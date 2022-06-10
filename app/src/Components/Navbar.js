import React from 'react';
import PropTypes from "prop-types";

function Navbar () {
  return (
    <div>
        <h3>User App</h3>
    </div>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired
}

export default Navbar;