import React from "react";
import { connect } from "react-redux";
import {selectCollectionForPreview} from "../../redux/shop/shop.selector";
import {createStructuredSelector} from "reselect";
import {CollectionOverviewContainer} from "./collection-overview.styles"
import CollectionPreview from "../../components/collection-preview/collection-preview";


const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
  </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);