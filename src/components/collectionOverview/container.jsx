import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../spinner";
import CollectionOverview from "./index";
import { compose } from "redux";
import { selectShopIsFetching } from "../../redux/shop/shopSelector";

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopIsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
