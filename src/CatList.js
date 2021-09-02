// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
        return (
            <div>
                { 
                    this.props.catPics.map((cat) => 
                    <div key={cat.id}><img src={cat.url} alt=""/></div>)
                }
            
            </div>
        )
    }

}
export default CatList;