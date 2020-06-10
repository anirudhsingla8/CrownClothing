import React,{Component} from "react";
import ShopData from "./ShopPageData";
import CollectionPreview from "../../components/collection_preview/CollectionPreview";

class ShopPage extends Component{
    state={
        collections:ShopData
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(collection => (
                        <CollectionPreview
                            key={collection.id}
                            title={collection.title}
                            routeName={collection.routeName}
                            items={collection.items}
                        />
                    // the above code can also be written in below format
                    // collections.map(collection => (<CollectionPreview key={collection.id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;