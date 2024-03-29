import React, { Component } from 'react';

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export class ShopPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             collections: SHOP_DATA
        }
    }
    

    render() {
        const {collections} = this.state;
        return (
            <div>
                {
                    collections.map(({id, ...otherCollcetionProps}) => (
                        <CollectionPreview key = {id} {...otherCollcetionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
