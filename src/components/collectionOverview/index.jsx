import React from "react";
import CollectionPreview from "../collectionPreview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategoryForPreview } from "../../redux/shop/shopSelector";

import "./styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCategoryForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
