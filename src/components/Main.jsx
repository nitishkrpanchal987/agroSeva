import React, { useEffect, useState } from 'react'
import './main.scss'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const Home = () => {
  const [counterOn, setConteron] = useState(false);
  const [alldocs, setdocs] = useState([]);
  const [farmer, setfarmer] = useState([]);
  const [donor, setdonor] = useState([]);
  useEffect(() => {
    const temp = []
    db.collection("campaigns").get()
      .then((doc) => {
        doc.forEach((docu) => {
          const data = docu.data().campaignsList[0];
          temp.push(data)
          // setdocs((prev)=>{
          //   return [...prev, docu.data()]
          // })
        })
        setdocs(temp)

      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [])

  useEffect(() => {
    const temp = []
    db.collection("farmer_exp").get()
      .then((doc) => {
        doc.forEach((docu) => {
          const data = docu.data().experience;
          temp.push(data)
          // setdocs((prev)=>{
          //   return [...prev, docu.data()]
          // })
        })
        setfarmer(temp[0])

      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [])

  useEffect(() => {
    const temp = []
    db.collection("donor_exp").get()
      .then((doc) => {
        doc.forEach((docu) => {
          const data = docu.data().experience;
          temp.push(data)
          // setdocs((prev)=>{
          //   return [...prev, docu.data()]
          // })
        })
        setdonor(temp[0])

      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [])

  // alldocs[1].forEach((ele, ind)=>{
  //   console.log((ele));
  // })
  // console.log(typeof(alldocs));
  function createClickHandler(item) {
    return function () {
      onSet(item);
    }
  }

  const onSet = (temp) => {
    localStorage.clear();
    const alltemp = temp;
    localStorage.setItem("obj", JSON.stringify(alltemp));
  }
  console.log((farmer));

  return (
    <>
      <div className="heading">
        <span className='big'>Bring a creative project to life.</span>
        <span className='small'>on AgroSeva:</span>
      </div>
      <ScrollTrigger onEnter={() => { setConteron(true) }}>
        <div className="count">
          <div className="b b1">
            <span className='num'>{counterOn && <CountUp start={0} end={3000} duration={3} />}</span>
            <span style={{fontWeight:'bold'}}>Total farmer</span>
          </div>
          <div className="b b2">
            <span className='num'>{counterOn && <CountUp start={0} end={999} duration={3} />}</span>
            <span style={{fontWeight:'bold'}}>Seva count</span>
          </div>
          <div className="b b3">
            <span className='num'><i class="fa-solid fa-rupee-sign"></i>  {counterOn && <CountUp start={0} end={50000} duration={3} />}</span>
            <span style={{fontWeight:'bold'}}>Fund raised</span>
          </div>
        </div>
      </ScrollTrigger>
      <Carousel style={{ marginTop: "20px", maxHeight: '20vh', minWidth: '90vw' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.india.gov.in/sites/upload_files/npi/files/CSMOP-NPI_0.jpg"
            alt="First slide"
            style={{ maxHeight: '20vh', minWidth: '90vw' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.india.gov.in/sites/upload_files/npi/files/National-Logistics-Portal-Marine.jpg"
            alt="Second slide"
            style={{ maxHeight: '20vh', minWidth: '90vw' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.india.gov.in/sites/upload_files/npi/files/vandhan.jpg"
            alt="Third slide"
            style={{ maxHeight: '20vh', minWidth: '90vw' }}
          />
        </Carousel.Item>
      </Carousel>
      <div className="division">
        <div className="left">
          <span className="title" style={{fontWeight:'bold', fontSize:'2rem', textDecoration:'underline'}}>Feature project</span>
          <img src="https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052__480.jpg" alt="" />
          <span className='lefttitle'> The rabi crop</span>
          <span className="ldesc">Rabi Crops are harvested in the spring season while it is sown in winter. The rabi crops are sown around mid-November, preferably after the monsoon rains are over, and harvesting begins in April / May. The crops are grown either with rainwater that has percolated into the ground or using irrigation. A good rain in winter spoils the rabi crops but is good for Kharif crops.
          </span>
        </div>


        <div className="right">
          <span className="title" style={{fontWeight:'bold', fontSize:'1.2rem'}}>recommend for you</span>
          {alldocs.map((item) => (
            <>
              <Link to="/blog" onClick={createClickHandler(item)}>
                <div className="offer">
                  <img src={item.campaign_image_url} alt="" />
                  <div className="offercon">
                    <span className='crop'>{item.campaign_title}</span>
                    <span className='fund' style={{ color: "green" }}>100% funded</span>
                    <span className='funder'>{item['contact'].name}</span>
                    {/* <div className="icons">
              <i class="fa-solid fa-thumbs-up like"></i>
              <i class="fa-solid fa-thumbs-down dislike"></i>
              <i class="fa-solid fa-comment"></i>
              </div> */}
                  </div>
                </div>
              </Link>
            </>
          ))}
          {/* <div className="offer">
            <img src="https://ksr-ugc.imgix.net/assets/040/234/566/ca27bbe235a7c26f62c95c0afc4e58fb_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1678819216&gif-q=50&q=92&s=d273b1ef8235dbd5dcaa5b2ae25f6e4e" alt="" />
            <div className="offercon">
              <span className='crop'>The kharif crop</span>
              <span className='fund'>100% funded</span>
              <span className='funder'>by falna babu</span>
              <div className="icons">
              <i class="fa-solid fa-thumbs-up like"></i>
              <i class="fa-solid fa-thumbs-down dislike"></i>
              <i class="fa-solid fa-comment"></i>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <hr style={{ marginTop: '50px' }} />

      <h1 className='outb' style={{textDecoration:'underline'}}>Farmer experience</h1>
      <div className="aboutfarmer">
        {
          farmer.map((ele) => (
            <>
              <div className="info">
                <img src={ele.image_url} alt="" />
                <span className="desc" style={{ textAlign: 'center' }}>{ele.message.slice(0, 200)}</span>
              </div>
            </>
          ))
        }
        {/* <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div>
        <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div>
        <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div>
        <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div> */}
      </div>
      <hr />
      <h1 className='outb' style={{textDecoration:'underline'}}>Donor's experience</h1>
      <div className="aboutfarmer">
        {
          donor.map((ele) => (
            <>
              <div className="info">
                <img src={ele.image_url} alt="" />
                <span className="desc">{ele.exp.slice(0, 150)}</span>
              </div>
            </>
          ))
        }
        {/* <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div>
        <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div>
        <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div>
        <div className="info">
          <img src="https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg" alt="" />
          <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quos molestias tenetur ex molestiae sed consectetur modi eius dolore itaque.</span>
        </div> */}
      </div>
    </>
  )
}

export default Home
