import React from 'react'
import './donation.scss'
import { Link } from 'react-router-dom'

const Donation = () => {
    return (
        <div className='con'>
            <div className="heading">
                <h1>Welcome to AgroSeva</h1>
            </div>
            <div className="divide">
                <div className="left">
                    <h2>Demonstration</h2>
                    <iframe width="600" height="340" src="https://www.youtube.com/embed/qARXCXvQXKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptas inventore iure perspiciatis placeat soluta rem optio. Culpa aperiam neque assumenda ipsum recusandae dignissimos aliquid aut illo impedit laboriosam excepturi fugit esse cumque alias ipsa, officiis commodi corporis! Laboriosam facere nihil ducimus maxime sed sit amet odit, sapiente tenetur distinctio?
                    </p>
                </div>
                <div className="right">
                    <h2>Download Now</h2>
                    <img src="https://firebasestorage.googleapis.com/v0/b/agroseva-4fdc8.appspot.com/o/images%2Fc655f52a-c3a0-4e48-937f-6e62df19696d?alt=media&token=468c1868-d688-4ba8-8f20-24cb8b38c19d" alt="" />
                    <Link to="https://play.google.com/store/apps/details?id=com.sticksports.spl2" target='_blank'><button>Download Now</button></Link>
                </div>
            </div>
            <h1 style={{marginTop:'30px', marginLeft:'5vw'}}>ScreenShots</h1>
            <div className="images">
                <div className="image">
                    <img src="https://play-lh.googleusercontent.com/TLlwosxCUW4C-w5xRAxpg5GE3jMd69l9tubZ1ZxrhCmjK0FAtdPlvudYhaTohpBBEAg=w1052-h592-rw" alt="" />
                </div>
                <div className="image">
                    <img src="https://play-lh.googleusercontent.com/TLlwosxCUW4C-w5xRAxpg5GE3jMd69l9tubZ1ZxrhCmjK0FAtdPlvudYhaTohpBBEAg=w1052-h592-rw" alt="" />
                </div>
                <div className="image">
                    <img src="https://play-lh.googleusercontent.com/TLlwosxCUW4C-w5xRAxpg5GE3jMd69l9tubZ1ZxrhCmjK0FAtdPlvudYhaTohpBBEAg=w1052-h592-rw" alt="" />
                </div>
                <div className="image">
                    <img src="https://play-lh.googleusercontent.com/TLlwosxCUW4C-w5xRAxpg5GE3jMd69l9tubZ1ZxrhCmjK0FAtdPlvudYhaTohpBBEAg=w1052-h592-rw" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Donation
