import React, { Component, PropTypes } from 'react';

export default class Error extends Component {

   constructor(props) {
      super(props);

      this.state = this.makeInitialState(props);
   }

   makeInitialState(props) {
      return {
      };
   }

   render() {
      return (
         <div className="error">Ett fel uppstod</div>
      );
   }
}

Error.propTypes = {
};