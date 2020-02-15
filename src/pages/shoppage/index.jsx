import React from "react";
import CollectionsOverview from "../../components/collectionOverview";
import { Route } from "react-router-dom";
import CategoryPage from "../categorypage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
