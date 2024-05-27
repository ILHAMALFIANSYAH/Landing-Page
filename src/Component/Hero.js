import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

function Hero() {
    return (
        <section className="hero-section d-flex align-items-center" id="hero">
            <div className="container text-center">
                <h1 className="display-3 text-white">Selamat Datang di SMK TI BAZMA</h1>
                <p className="lead text-white">Sekolah unggulan berasrama untuk anak-anak tidak mampu dengan pendidikan berkualitas tinggi.</p>
                <a href="#company-profile" className="btn btn-primary btn-lg mt-3">Pelajari Lebih Lanjut</a>
            </div>
        </section>
    );
}

export default Hero;
