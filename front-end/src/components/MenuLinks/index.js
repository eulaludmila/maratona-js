import React from 'react';
import {MenuLinks as Menu} from './styled';


const MenuLinks = () => {
    return(
        <Menu>
        <div className="alinha-items">
        <div className="item">Back</div>
        <div className="item">Links</div>
        <div className="item">Create</div>
        </div>
    </Menu>
    )
}
export default MenuLinks;