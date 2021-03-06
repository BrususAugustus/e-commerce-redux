import React from "react";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionOveriewContainer from "../../components/collections-overview/collection-overview.container";


class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart(); 
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOveriewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
