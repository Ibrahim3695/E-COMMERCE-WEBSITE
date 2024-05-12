import React from 'react'
import "./HeroPage.css"

const HeroPage = () => {
    return (
        <div className='hero-main-page'>
            <aside className='left-side-writeup'>
                <h1 className='head1'>Sale 50% Off </h1>
                <h1 className='head2'>Of Everything</h1>
                <h2>Empowering your shopping experience</h2>

                <button>Shop now</button>
            </aside>
            <img src={"./shoes.png"} alt="hero-image" />

            <article className='grey-abosolute'></article>
        </div>
    )
}

export default HeroPage