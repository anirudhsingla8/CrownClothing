import React from "react";
import './collectionPreview.scss';
import CollectionItem from "../collection_item/CollectionItem";


const CollectionPreview = (props) => {
    const {title,items} = props
    return(
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                     items
                         // we use the filter to get item les than index 4 in item array
                         .filter((item,index) => index < 4)
                         .map(item => (
                             <CollectionItem
                                 key={item.id}
                                 imageUrl={item.imageUrl}
                                 price={item.price}
                                 name={item.name}>
                                 {item.name}
                             </CollectionItem>
                         ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;
