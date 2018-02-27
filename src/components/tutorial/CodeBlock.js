import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';

class CodeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: this.props.header,
      color: 'red',
      items: []
    };

    this.headers = ['FOO', 'BAR', 'BAZ'];

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
  }

  addItem() {
    this.setState({
      items: [
        ...this.state.items,
        {
          color: this.state.color
        }
      ]
    });
    // let newItems = this.state.items;
    // newItems.push({ color: "hotpink" });
    // this.setState({ items: newItems });
  }

  removeItem() {
    this.setState({
      items: this.state.items.slice(0, -1)
    });
  }

  toggleColor() {
    this.setState({
      color: this.state.color === 'red' ? 'green' : 'red'
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

    const ToggleButton = styled(Button)`
      background: ${this.state.color};
    `;

    const PrettierButton = styled(Button)`
      border-color: palevioletred;
    `;

    const Item = styled.div`
      background-color: ${prop('color', 'hotpink')};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 1em;
      display: inline-block;
    `;

    return (
      <Block>
        {this.state.header}
        <ToggleButton onClick={this.toggleColor}>🐑</ToggleButton>
        <Button onClick={this.addItem}>+</Button>
        <PrettierButton onClick={this.removeItem}>-</PrettierButton>
        {this.state.items && (
          <div>
            {this.state.items.map((item, key) => (
              <Item color={item.color} key={`list_item_${key}`} />
            ))}
          </div>
        )}
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
