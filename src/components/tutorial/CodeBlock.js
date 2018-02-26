import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    const Block = styled.div`
      background: #ccc;
      max-width: 600px;
      margin: 0 auto;
      padding: 1em;
    `;

    const Button = styled.button`
      margin: 0 0.7em;
      border-color: hotpink;
    `;

    const PrettierButton = styled(Button)`
      border-color: palevioletred;
    `;

    return (
      <Block>
        {this.state.header}
        <Button onClick={this.rotateHeader}>🎡</Button>
        <PrettierButton onClick={this.rotateHeader}>🎡</PrettierButton>
      </Block>
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
