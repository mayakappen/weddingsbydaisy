import React from 'react';
import './Homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1>Weddings by Daisy</h1>
            <p>
                We are an event company located in Los Angeles that specializes in weddings.
            </p>
            <div className="image-gallery">
                <img src="https://i.imgur.com/GuKIlSO.jpeg" alt="Wedding ceremony" />
                <img src="https://i.imgur.com/ct2bdlR.jpeg" alt="wedding bouquet" />
                <img src="https://i.imgur.com/LyZKbjp.jpeg" alt="Wedding couple" />
                <img src="https://i.imgur.com/KRrTiUx.jpeg" alt="Wedding catering" />
                
            </div>
        </div>
    );
}

export default Homepage;

