import React from "react";

function Product(){
    return(
        <div>
            <div className="row">
            <div className="col-5 px-5">
                <img className="img-product" src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?w=2000" alt="nft"></img>
            </div>
            <div className="col-7 px-5">
                <div>
                    <h1>APE NFT</h1>
                    <p>owned by XYZ</p>
                </div>
                <div className="card py-0 px-2">
                    <div className="card-body">
                        <p className="fs-4 text-secondary">Current Price</p>
                        <div>
                            <h2 className="d-inline-block">100ETH</h2>
                            <p className="d-inline-block ms-2">$2500.00</p>
                        </div>
                        <div className="my-3 row">
                        <div className="col-6">
                            <button className="btn btn-lg btn-outline-dark fs-4 w-100">Add to Cart</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-lg btn-dark fs-4 w-100">Buy Now</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere dictum nulla, in pellentesque nisi vestibulum sit amet. Quisque eu quam semper, facilisis turpis id, pulvinar orci. Aenean facilisis, justo vel bibendum sollicitudin, odio tellus consectetur nisl, sit amet facilisis lacus orci eget lectus. Quisque maximus venenatis enim, nec porta.</p>
                </div>
            </div> 
            </div>
            <div className="row m-5">
                <table className="table table-light table-borderless">
                    <thead className="">
                        <tr className="">
                            <th scope="col" className="p-4">Price</th>
                            <th scope="col" className="p-4">USD Price</th>
                            <th scope="col" className="p-4">Expiration</th>
                            <th scope="col" className="p-4">From</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 px-4">110 ETH</td>
                            <td className="py-3 px-4">$150.00</td>
                            <td className="py-3 px-4">1 months</td>
                            <td className="py-3 px-4">abxcs</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4">110 ETH</td>
                            <td className="py-3 px-4">$150.00</td>
                            <td className="py-3 px-4">6 days</td>
                            <td className="py-3 px-4">aoiefj</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4">110 ETH</td>
                            <td className="py-3 px-4">$150.00</td>
                            <td className="py-3 px-4">10 minutes</td>
                            <td className="py-3 px-4">fcadkvn</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product;