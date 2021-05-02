import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <div class="directory-menu">
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">HATS</h1>
                        <span class="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">JACKETS</h1>
                        <span class="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">SNEAKERS</h1>
                        <span class="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">WOMENS</h1>
                        <span class="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">MENS</h1>
                        <span class="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage