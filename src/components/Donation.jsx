import React from 'react'
import './donation.scss'
import { Link } from 'react-router-dom'
import w1 from "../media/w1.jpeg"
import w2 from "../media/w2.jpeg"
import w3 from "../media/w3.jpeg"
import w4 from "../media/w4.jpeg"


const Donation = () => {
    return (
        <div className='con'>
            <div className="heading">
                <h1>Welcome to AgroSeva</h1>
            </div>
            <div className="divide">
                <div className="left">
                    <h2>Demonstration</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BwFevEviSmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="desc">
                        Join the community of farmers and donors on AgroSeva, where

                        you can easily connect, fund, and demand products, while also

                        buying or renting equipment and stocking up on livestock

                        essentials at the best prices.
                    </p>
                </div>
                <div className="right">
                    <h2>Download Now</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agroseva-4fdc8.appspot.com/o/images%2Fc655f52a-c3a0-4e48-937f-6e62df19696d?alt=media&token=468c1868-d688-4ba8-8f20-24cb8b38c19d" alt="" />
                    <Link to="https://github.com/RahulSoni0/AgroSeva/blob/main/app-release.apk" target='_blank'><button>Download Now</button></Link>
                </div>
            </div>
            <h1 style={{ marginTop: '30px', marginLeft: '5vw' }}>ScreenShots</h1>
            <div className="images">
                <div className="image">
                    <img src={w1} alt="" />
                </div>
                <div className="image">
                    <img src={w2} alt="" />
                </div>
                <div className="image">
                    <img src={w3} alt="" />
                </div>
                <div className="image">
                    <img src={w4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Donation
