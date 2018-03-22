import React, {PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';


export default React.createClass({
  displayName: 'Ansver',
  
  render() {
    return (
      <form>
      <TextField
        floatingLabelText={this.props.label}
        value="Hello" />
      </form>
    );
  }
});