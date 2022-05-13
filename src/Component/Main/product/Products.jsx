import React, { Component } from 'react';
const Product = (props) => {
    const data = props.data;
    return (
        <>
            <div className="card mb-5" >
                <img src={data.pic} alt="" className="card-img-top" style={{ maxHeight: '170px' }} />
                <div className="Cardd">
                    <h5 className=" card-header d-flex justify-content-center">{data.title}</h5>
                    <p className='card-text text-center desc' style={{ maxHeight: '100px' }} dir="rtl">{data.desc}</p>
                </div>
                <button class="btn ">
                    <svg width="301px" height="45px" viewBox="0 0 180 25" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>ادامه مطلب</span>
                </button>
            </div>
        </>
    );
}

export default Product;