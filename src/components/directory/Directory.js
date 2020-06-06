import React, {Component} from "react";
import './directory.scss';
import MenuItem from "../menu_item/MenuItem";

class Directory extends Component{
    state={
        sections:[
            {
                title:'HATS',
                id:1,
                imageURL:'https://i.ibb.co/cvpntL1/hats.png'
            },
            {
                title:'JACKETS',
                id:2,
                imageURL:'https://i.ibb.co/px2tCc3/jackets.png'
            },
            {
                title:'SNEAKERS',
                id:3,
                imageURL:'https://i.ibb.co/0jqHpnp/sneakers.png'
            },
            {
                title:'WOMENS',
                id:4,
                size:'large',
                imageURL:'https://i.ibb.co/GCCdy8t/womens.png'
            },
            {
                title:'MENS',
                id:5,
                size:'large',
                imageURL:'https://i.ibb.co/R70vBrQ/men.png'
            }
        ]
    }

    render() {
        const {sections} = this.state;
        return(
            <div className='directory-menu'>
                {
                    sections.map(section => <MenuItem size={section.size} key={section.id} title={section.title} imageURL={section.imageURL}/>)
                }
            </div>
        )
    }
}

export default Directory;
