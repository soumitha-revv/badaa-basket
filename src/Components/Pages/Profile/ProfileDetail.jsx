import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../../styles/ProfileDetail.modules.css";

export default function ProfileDetail() {

    let user = JSON.parse(localStorage.getItem("userProfile"))
    
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-3 border-right"><small>
                        <h5 className="hEffect mb-3">MY ACCOUNT</h5>
                        <div className="hEffect my-1">Personal Details</div>
                        <div className="mt-1 ml-3 text-muted" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Edit Profile</span>
                            <span className="hEffect my-1">-Delivery Addresses</span>
                            <span className="hEffect my-1">-Email Addresses</span>
                        </div>
                        <div className="hEffect my-1">Shop From</div>
                        <div className="text-muted ml-3" style={{ display: "flex", flexDirection: "column" }}>
                            <span className="hEffect my-1">-Smart Basket</span>
                            <span className="hEffect my-1">-Shopping List</span>
                            <span className="hEffect" >-Past Order</span>
                        </div>
                        <Link to="/my-account/orders" className="hEffect my-3 text-dark">My Orders</Link>
                        <div className="hEffect my-3">Customer Service</div>
                        <div className="hEffect my-3">My Membership</div>
                        <div className="hEffect my-3">My Wallet</div>
                        <div className="hEffect my-3">My Gift Cards</div>
                        <div className="hEffect my-3">My Payments</div>
                        <div className="hEffect my-3">Alerts & Notification</div></small>
                    </div>
                    <div className="col-9">
                        <div className="ml-4">
                            <div className="border-bottom">
                                <span className="h2 font-weight-light mr-4 p-2">Profile Detail</span><span className="mt-4 hEffect font-weight-bolder">(Edit)</span>
                            </div>
                            <div className="border-bottom">
                                <div className="mt-4 font-weight-light h4">{user.name}</div>
                                <div>
                                    <i class="fa fa-envelope" style={{ color: "grey" }} aria-hidden="true"></i> <span>{user.email}</span>
                                </div>
                                <div>
                                    <span className="ml-3">+(91) {user.number}</span>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>

                        <div className="row border mt-3 ml-4" style={{ height: "50px" }}>
                            <div className="col-8" style={{ backgroundImage: "linear-gradient(180deg,#ededed,#ffffff)" }}>
                                <div className="h4 font-weight-light hEffect">My Orders</div>
                            </div>
                            <div className="col-4 border-left" style={{ backgroundImage: "linear-gradient(180deg,#ededed,#ffffff)" }}>
                                <div className="h4 font-weight-light hEffect">My Wallet</div>
                            </div>
                        </div>
                        <div className="row border ml-4 pt-3" style={{ height: "400px" }}>
                            <div className="col-8">
                                <p>You haven't placed any order yet, <span className="text-primary hEffect">Start Shopping!</span></p>
                            </div>
                            <div className="col-4 border-left">
                                <h4>BALANCE: Rs. {user.wallet}</h4>
                                <button style={{ backgroundColor: "#fab457", border: "grey", borderRadius: "5px", width: "130px", height: "35px", outline: "none" }}>FUND WALLET</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
