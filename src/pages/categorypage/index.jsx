import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { selectShopCategory } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collectionItem";

const CategoryPage = ({ category }) => {
  const { title, items } = category;
  return (
    <div className="category-page">
      <h2 className="title"> {title}</h2>
      <div className="items">
        {items.map(i => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  category: selectShopCategory(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps)(CategoryPage);
