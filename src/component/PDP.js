import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink , useParams, useLocation} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';

import { Cart } from '../redux/actions/cart';
import { useDispatch , connect} from 'react-redux';
import { render } from '@testing-library/react';

var item = [

    {
        id: 1,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item1",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 2,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item2",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 3,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item3",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 4,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item4",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 5,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item5",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 6,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item6",
        price: "Rp.30.000",
        discount: "Rp15.000"
    }

];

function PDPList() {
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>(
                        <Link to={`/PDP?id=${i.id}`} className="color-black col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                            <img src={i.img} className="img_small"/>
                            <h4>{i.name}</h4>
                            <p>Esse ex minim pariatur laboris aliqua.</p>
                            <p className="bold line-through color-red">{i.price}</p>
                            <p className="bold">{i.discount}</p>
                            {/* <button class="btn-special">
                                <Link className="color-black" to={`/PDP?id=${i.id}`}>View More</Link>
                            </button> */}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

function PDPItem(){
    const [count, setCount] = useState(0);

    var query = new URLSearchParams(useLocation().search);

    const dispatch = useDispatch();
    const Save = (idx) => {
        const value = {
            id_item : idx,
            name : document.getElementById("itemName").innerText,
            qty : document.getElementById("qty").value,
            price: document.getElementById("price").innerText
        }
        dispatch(Cart(value))
    }


    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>
                        {
                            if(i.id == query.get("id")){
                                return (
                                            <div key="key" className="col-xs-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                                                <img src={i.img} className="img_small"/>
                                                <h4 id="itemName">{i.name}</h4>
                                                <p className="bold line-through color-red">{i.price}</p>
                                                <p className="bold" id="price">{i.discount}</p>
                                                <div className="row margin-top-10 text-center">
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <button className="btn-special2" onClick={() =>
                                                            setCount(count + 1)}
                                                        > + </button>
                                                    </div>
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <input id="qty" type="text" className="input-special" min="0" value={count} readOnly/>
                                                    </div>
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <button className="btn-special2" onClick={() =>
                                                            {if(count> 0) {
                                                                setCount(count - 1)
                                                            }}
                                                        }> - </button>
                                                    </div>
                                                </div>
                                                <button className="btn-special margin-top-10" onClick={() =>
                                                    {
                                                        Save(i.id);
                                                    }    
                                                }
                                                >
                                                    Add To Cart
                                                    {/* <Link className="color-black" to={`/Cart`}>Buy</Link> */}
                                                </button>
                                            </div>
                                        );
                            }


                        }
                    )
                }
            </div>
        </>
    );
}


function PDP(){
    var query = new URLSearchParams(useLocation().search);
    var isQueryExist = query && query.get("id");
    return(
        <>
            {!isQueryExist && (
                <PDPList />
            )}
            {isQueryExist && (
                <PDPItem />
            )}
        </>
    );
}

export default PDP;