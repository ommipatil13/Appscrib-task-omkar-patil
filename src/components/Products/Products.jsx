import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './Products.css'
import Arrow from '../Assets/arrow.svg';

const API = "https://fakestoreapi.com/products"

const Products = () => {

    const [allProducts, setAllProducts] = useState([])
    const [showFilter, setShowFilter] = useState(false)
    const [sideFIlter, setSideFilter] = useState(true)

    const getProducts = async () => {
        const res = await fetch(API);
        const data = await res.json()
        console.log(data)
        setAllProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, [])



    const filterCatergory = (catItem) => {
        const result = allProducts.filter((curCat) => {
            return curCat.category === catItem
        })
        setAllProducts(result)
    }


    return (
        <div className='products'>
            <div className="products-filter">

                <div>
                    <p>3425 ITEMS</p>
                    <button onClick={() => setShowFilter(!showFilter)}>SHOW FILTER</button>
                </div>

                <select onInput={(e) => filterCatergory(e.target.value)}>
                    <option value="recommended">RECOMMENDED</option>
                    {/* <option value="newest_first">NEWEST FIRST</option> */}
                    {/* <option value="popular">POPULAR</option>
                    <option value="price_high_to_to">PRICE: HIGH TO LOW</option>
                    <option value="price_low_to_high">PRICE: LOW TO HIGH</option> */}
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    {/* <option onChange={() => window.location.reload()}>Reset Filter</option> */}
                </select>
            </div>




            <div className="products-allproducts">

                <div className={showFilter ? 'products-filter-options open' : 'products-filter-options'}>
                    <label htmlFor="customizable">
                        <input type="checkbox" id='customizable' />
                        CUSTOMIZABLE
                    </label>
                    <hr />
                    <div className="products-filter-container">
                        <button onClick={() => setSideFilter(!sideFIlter)}>IDEAL FOR <span><img src={Arrow} alt="arrow" /></span></button>
                        {sideFIlter ? <>
                            <div className="filter-section">
                                <p>All</p>
                                <button>Unselect All</button>
                                <label htmlFor="electronics">
                                    <input type="checkbox" id="electronics" onInput={() => filterCatergory('electronics')} />
                                    Electronics
                                </label>
                                <label htmlFor="jewelery">
                                    <input type="checkbox" id="jewelery" onInput={() => filterCatergory('jewelery')} />
                                    Jewelery
                                </label>
                                <label htmlFor="reset_filter">
                                    <input type="checkbox" id="reset_filter" onClick={() => window.location.reload()} />
                                    {/* <input type="checkbox" name="All_Category" onChange={() => setAllProducts(allProducts)} /> */}
                                    Reset Filter
                                </label>
                            </div>
                        </> : null}

                    </div>

                    <hr />

                    <div className="products-filter-container">
                        <h5>OCCASION <span><img src={Arrow} alt="arrow" /></span></h5>
                        <p>All</p>

                    </div>

                    <hr />

                    <div className="products-filter-container">
                        <h5>WORK <span><img src={Arrow} alt="arrow" /></span></h5>
                        <p>All</p>
                    </div>

                    <hr />

                    <div className="products-filter-container">
                        <h5>FABRIC <span><img src={Arrow} alt="arrow" /></span></h5>
                        <p>All</p>
                    </div>

                    <hr />

                    <div className="products-filter-container">
                        <h5>SEGMENT <span><img src={Arrow} alt="arrow" /></span></h5>
                        <p>All</p>
                    </div>

                    <hr />

                    <div className="products-filter-container">
                        <h5>SUITABLE FOR <span><img src={Arrow} alt="arrow" /></span></h5>
                        <p>All</p>
                    </div>

                </div>
                <div className="products-container">
                    {
                        allProducts.map((product) => {
                            return <Item key={product.id} product={product} />
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default Products