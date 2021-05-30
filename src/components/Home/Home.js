import React from 'react';
import './Home.css';
import img1 from './c-1.jpg';
import img2 from './c-2.jpg';
import img3 from './c-3.jpg';
import img4 from './c-4.jpg';
import img5 from './c-5.jpg';

const Home = () => {
    return (
        <div className="home-bg">
        <div className="container">
                <div style={{ height: '90vh' }} className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 home-content-text">
                        <h1>Welcome To E-Seller</h1>
                        <h4>Lorem ipsum dolor.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit. Reiciendis cum modi sunt enim, quos maiores maxime  quam eaque <br />rerum, iste, quas adipisci  a sed aliquam minima iusto libero quis! Doloribus. Lorem ipsum dolor, sit amet totam.</p>
                    </div>
                    <div className="col-md-6 ">
                        <div id="carouselExampleInterval" class="carousel slide cstm-crsl" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <img src={img1} class="d-block w-100 " alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src={img2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src={img3} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src={img4} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src={img5} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Home;
