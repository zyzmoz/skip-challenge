import React, { Component } from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';
import * as productProvider from '../providers/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { products, cart } from '../actions';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    console.log(this.props);
    productProvider.getProdutcs().then(res => {
      this.props.actions.loadProducts(res.data);
    });
  }

  buildGrid = (obj) => {
    const items = obj.map((item, index) => {
      return (
        <Grid.Column key={index}>
          <Card>
            <Card.Content>
              <Card.Header>
                {item.name}
              </Card.Header>
              <Card.Description>
                {item.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Price: {item.price.toFixed(2)}
              <Button onClick={() => this.props.actions.addToCart(item)} primary fluid>Buy</Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    });
    return items;
  }

  render() {
    console.log(this.props);

    const productList = this.props.products;

    return (
      <div className="padding">
        <Grid columns={5}>
          {this.buildGrid(productList)}
        </Grid>

      </div>
    );
  }
}

const mapStateToProps = (state) =>
  ({ products: state.products });

const mapDispatchToProps = (dispatch) =>
  ({ actions: bindActionCreators(Object.assign({}, products, cart), dispatch) });



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
