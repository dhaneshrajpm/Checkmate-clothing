import React from 'react'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preivew/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }
    render(){
        // const collection = this.state;
        return(
            this.state.collections.map(({id,...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            )
        ))
    }
    
}

export default ShopPage;
