import React from 'react'
import io from 'socket.io-client';
import './Home.css'
import logo from '../public/img/logo.png'
import { useEffect, useState } from 'react';

const socket = io('http://localhost:3010', {
    transports: ['websocket', 'polling']
});

function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    socket.on('bitdata', bitData => {
      setData(bitData.data);
    });
  }, [data]);

  return (
    <div>
      <nav className="navbar navbar-light bg-warning">
        <div className="container">
          <a className="navbar-brand " href="#"><img src={logo} /></a>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <div className="card text-center">
              <h5 className="card-header bg-warning">
                Best Ask Price
              </h5>
              <div className="card-body">
                <h5 className="card-title"> <strong>{data.bestAskPrice}</strong></h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center">
              <h5 className="card-header bg-warning">
                Best Ask Quantity
              </h5>
              <div className="card-body">
                <h5 className="card-title"> <strong>{data.bestAskQuantity}</strong></h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center">
              <h5 className="card-header bg-warning">
                Best Bid
              </h5>
              <div className="card-body">
                <h5 className="card-title"> <strong>{data.bestBid}</strong></h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center">
              <h5 className="card-header bg-warning">
                Best Bid Quantity
              </h5>
              <div className="card-body">
                <h5 className="card-title"> <strong>{data.bestBidQuantity}</strong></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home