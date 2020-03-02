import React from "react";
// import CollectionsOverview from "../../components/collectionOverview";
import { Route } from "react-router-dom";
import CategoryPage from "../categorypage";
import Spinner from "../../components/spinner";
import CollectionOverviewContainer from "../../components/collectionOverview/container";

//const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      component={CollectionOverviewContainer}
    />
    <Route
      path={`${match.path}/:categoryId`}
      render={props => <CategoryPageWithSpinner isLoading={false} />}
    />
  </div>
);

export default ShopPage;
