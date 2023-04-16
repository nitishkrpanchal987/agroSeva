// import React from 'react'
import './intro.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';


const Intro = () => {

  // const [alldocs, setdocs] = useState([]);
  // const q = query(collection(db, "cities"), where("capital", "==", true));
  // useEffect(()=>{
  //   const temp=[]
  //   db.collection("campaigns").get()
  //   .then((doc) => {
  //     doc.forEach((docu)=>{
  //       const data=docu.data().campaignsList[0];
  //       temp.push(data)
  //       // setdocs((prev)=>{
  //       //   return [...prev, docu.data()]
  //       // })
  //     })
  //     setdocs(temp)
  // }).catch((error) => {
  //     console.log("Error getting document:", error);
  // });
  // },[])
  // // console.log(alldocs);
  // alldocs.forEach((ele, ind)=>{
  //   // console.log((ele));
  // })

  const docs = JSON.parse(localStorage.getItem("obj"));
  // console.log(docs['donors'][0]['contact'].name);
  return (
    <div className='intro'>
      <div className="con">
        <span className="title" style={{textDecoration:'underline'}}>{docs.campaign_title}</span>
        <span className="titdesc" style={{fontWeight:'bold'}}>{docs.campaign_description}</span>
      </div>
      <div className="lr">
        <div className="left">
          <div className="lcon">
            <h1 style={{textDecoration:'underline'}}>About crop</h1>
            {/* <Carousel style={{ marginTop: "20px" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2023/04/02/22/07/bird-7895507_640.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2023/04/02/22/07/bird-7895507_640.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={docs.campaign_image_url}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel> */}
            <img src={docs.campaign_image_url} alt="" />
          </div>

          <div className="tabver">
            <div className="menu">
              <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Product</button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Campaign</button>

                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Profile</button>
              </div>

            </div>
            <div className="content">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">{docs.product_description}</div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">{docs.campaign_description}</div>

                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                  "Hi, I'm {docs['contact'].name}, a {docs['contact'].age}-year-old farmer from {docs['contact']['address'].city}, {docs['contact']['address'].state}. I work on a farm where we grow list of crops and raise list of livestock. We've been farming here for number of years and we take pride in producing high-quality, sustainable food for our community. It's great to meet you. What brings you here today?
                </div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
              </div>
            </div>
          </div>

        </div>
        <div className="right">
          <div className="rcon">
            <img src={docs['paymentOptions'][0].upi_qr_url} alt="" />
            <span className="name">Name</span>
            <span>{docs['contact'].name}</span>
            <span className="name">Age</span>
            <span>{docs['contact'].age}</span>
            <span className="name">Bank Name</span>
            <span>{docs['paymentOptions'][0].bank_name}</span>
            <span className="name">Account No.</span>
            <span>{docs['paymentOptions'][0].account_no}</span>
            <span className="name">IFSC</span>
            <span>{docs['paymentOptions'][0].ifsc}</span>
            <Link to='/form'><button className="button">Donate Now</button></Link>
          </div>
          <hr style={{ borderTop: '5px solid', backgroundColor: 'black' }} />
          <div className="donor">
            <h1>Donors</h1>
            <div className="dtitle">
              <span>Name</span>
              <span>Amount</span>
            </div>
            <div className="donorlist">
              {
                docs['donors'].map((ele, ind) =>( 
                  <>
                    <div className="dlist">
                      <span>{ind+1} {ele['contact'].name}</span>
                      <span>Rs. {ele.amount}</span>
                    </div>
                  </>
                ))
              }
              {/* <div className="dlist">
                <span>1. Aditya</span>
                <span>Rs 2000</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Intro
