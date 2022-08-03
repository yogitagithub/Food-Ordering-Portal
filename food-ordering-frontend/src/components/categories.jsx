import React from 'react';

const Categories = ({ item }) => {
    const {id, img} = item;
     
    return (
        <>
            <div className="main-page">
                <div className="main-img">
                    <img src={img} alt=""></img>
                </div>
            </div>
        </>
    );
}
export default Categories;