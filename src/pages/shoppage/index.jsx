import React from "react";
import SHOP_DATA from "./shopdata";
import CollectionPreview from "../../components/collectionPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps}></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
