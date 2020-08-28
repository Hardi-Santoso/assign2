import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';

var newArrivals = [
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
    }
]

var bestSeller = [
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
]

function Home ()
{
    return(
        <>
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                        <h2 className="Underline">New Arrivals</h2>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                        <h2 className="Underline"><Link  className="color-black" to={`/Category`}>View More</Link></h2>
                    </div>
                </div>
                <div className="row">
                    {
                        newArrivals.map((i,key)=>(
                            <Link to={`/Category/${i.id}`} className="color-black col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                                <img src={i.img} className="img_small"/>
                                <h4>{i.name}</h4>
                                <p className="bold line-through color-red">{i.price}</p>
                                <p className="bold">{i.discount}</p>
                                {/* <button class="btn-special">
                                    <Link className="color-black" to={`/Category/${i.id}`}>View More</Link>
                                </button> */}
                            </Link>
                        ))
                    }
                </div>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                        <h2 className="Underline">Best Seller</h2>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                        <h2 className="Underline"><Link  className="color-black" to={`/Category`}>View More</Link></h2>
                    </div>
                </div>
                
                <div className="row">
                    {
                        bestSeller.map((i,key)=>(
                            <Link to={`/Category/${i.id}`} className="color-black col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                                <img src={i.img} className="img_small"/>
                                <h4>{i.name}</h4>
                                <p className="bold line-through color-red">{i.price}</p>
                                <p className="bold">{i.discount}</p>
                                {/* <button class="btn-special">
                                    <Link className="color-black" to={`/Category/${i.id}`}>View More</Link>
                                </button> */}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Home;