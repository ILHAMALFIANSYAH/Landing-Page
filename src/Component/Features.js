import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Features.css';

function Features() {
    return (
        <section className="py-5 bg-light" id="school-features">
            <div className="container text-center">
                <h2 className="display-4">Fitur Sekolah</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <img src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg" alt="Feature 1" className="mb-3 img-fluid rounded-circle" />
                        <h4>Asrama</h4>
                        <p>
                            SMK TI BAZMA menyediakan fasilitas asrama yang nyaman dan lengkap bagi para siswa. Asrama ini membantu menciptakan lingkungan belajar yang kondusif dan mendukung perkembangan karakter.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg" alt="Feature 2" className="mb-3 img-fluid rounded-circle" />
                        <h4>Laboratorium TI</h4>
                        <p>
                            Sekolah ini dilengkapi dengan laboratorium teknologi informasi yang modern, memungkinkan siswa untuk belajar dan berlatih dengan peralatan yang up-to-date sesuai dengan perkembangan teknologi.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg" alt="Feature 3" className="mb-3 img-fluid rounded-circle" />
                        <h4>Kurikulum Berbasis Proyek</h4>
                        <p>
                            Kurikulum yang diterapkan di SMK TI BAZMA berbasis proyek, di mana siswa mengerjakan proyek nyata yang membantu mereka mengaplikasikan teori yang dipelajari ke dalam praktik langsung.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
