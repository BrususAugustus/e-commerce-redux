import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOveriew from "./collections.overview.component";
import { selectCollectionFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOveriewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOveriew);

export default CollectionOveriewContainer;