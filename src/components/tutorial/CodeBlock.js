import React from 'react';
import PropTypes from 'prop-types';

class CodeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: this.props.header
    };

    this.headers = ['FOO', 'BAR', 'BAZ'];

    this.rotateHeader = this.rotateHeader.bind(this);
  }

  rotateHeader() {
    const rand = Math.floor(Math.random() * 3);
    const header = this.headers[rand];

    this.setState({
      header
    });
  }

  render() {
    return (
      <div>
        {this.state.header}
        <button onClick={this.rotateHeader}>🎡</button>
      </div>
    );
  }
}

CodeBlock.defaultProps = {
  header: 'Foo'
};

CodeBlock.propTypes = {
  header: PropTypes.string
};

export default CodeBlock;
