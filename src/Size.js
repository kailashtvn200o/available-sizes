import React, { useState } from 'react';
import './size.css';
import Footer from './Footer';

import Header from './Header';

export default function Size() {
   

    return (
        <>

            <Header />
            <div className='nxtxt'>Available sizes</div>
            <div className='buttonContainer'>

                <div className='rectangle'>
                    
                        <div className='rectangle1'>
                            <button className='rectangletxt1'>
                                S
                            </button>


                            <button className='rectangletxt1'>
                                M
                            </button>


                            <button className='rectangletxt1'>
                                L
                            </button>
                        </div>
                    
                </div>
            </div>
            <Footer/>
        </>


    )
}