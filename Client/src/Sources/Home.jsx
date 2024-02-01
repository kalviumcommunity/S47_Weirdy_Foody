import React from 'react'
import download from '../Assets/download.jpeg'

function Home() {
    return (
        <div className='head'>
            <h2 className='heading'>Weirdly Foody</h2>
            <hr />
            <div className='item'>
                <div className='container'>
                    <img src={download} alt="" />
                    <div>
                        <h4>Name : Benami Kheer</h4>
                        <h4> Ingrediensts :</h4>
                            <ol>
                                <li>Garlic peeled</li>
                                <li>Milk</li>
                                <li>Sugar</li>
                                <li>Pistachios</li>
                                <li>Alum Powder</li>
                                <li>Cardomom powder</li>
                                <li>Almonds</li>
                                <li>Rose water</li>
                            </ol>
                        <h4>State : Delhi</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home