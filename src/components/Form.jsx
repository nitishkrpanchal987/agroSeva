import React, { useState } from 'react'
import './form.css'
import { db, storage } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Form = (props) => {
    const navigate = useNavigate();
    // const handleFileUpload = async (event) => {
    //     console.log('started')
    //     const file = event.target.files[0];
    //     const storageRef = storage.ref();
    //     const fileRef = storageRef.child(file.name);
    //     await fileRef.put(file);
    //     downloadURL= await fileRef.getDownloadURL();
    //     console.log('File uploaded successfully!');
    //     console.log('Download URL:', downloadURL);
    //   };
    let img;
    const handleFileUpload = async (event) => {
        console.log('started1')
        img = event.target.files[0];
    };

    const [userreg, setuserreg] = useState({
        name: "",
        age: "",
        email: "",
        gender: "",
        mobile: "",
        city: "",
        country: "",
        district: "",
        pincode: "",
        state: "",
        village: "",
        amount: "",
        desc: ""
    });
    const data = localStorage.getItem('obj')
    const ans = JSON.parse(data);
    // const [campaignsList, setcampaignsList] = useState([]);
    const handelinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value)
        setuserreg({ ...userreg, [name]: value })
    }
    // const temp = {
    //     amount: userreg.amount,
    //     message: userreg.desc,
    //     receipt_url: userreg.image,
    //     contact: {
    //         age: userreg.age,
    //         email: userreg.email,
    //         gender: userreg.gender,
    //         name: userreg.name,
    //         phone_no: userreg.mobile,
    //         address: {
    //             city: userreg.city,
    //             country: userreg.country,
    //             district:userreg.district,
    //             pincode: userreg.pincode,
    //             state: userreg.state,
    //             vill: userreg.village
    //         }
    //     }
    // }
    // ans['donors'].push(temp);
    // const uid = ans.doc_id;
    // const docRef = db.collection('campaigns').doc(uid);

    const handlesubmit = async (event) => {
        event.preventDefault();
        // image upload
        console.log('started')
        const file = img;
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        console.log('1');
        await fileRef.put(file);
        console.log('2');
        let downloadURL = await fileRef.getDownloadURL();
        console.log('3');
        console.log('File uploaded successfully!');
        console.log('Download URL:', downloadURL);

        localStorage.setItem('name', userreg.name);
        localStorage.setItem('age', userreg.age);
        localStorage.setItem('phnone', userreg.mobile);
        localStorage.setItem('email', userreg.email);
        localStorage.setItem('img', downloadURL);
        localStorage.setItem('amount', userreg.amount);

        const temp = {
            amount: userreg.amount,
            message: userreg.desc,
            receipt_url: downloadURL,
            contact: {
                age: userreg.age,
                email: userreg.email,
                gender: userreg.gender,
                name: userreg.name,
                phone_no: userreg.mobile,
                address: {
                    city: userreg.city,
                    country: userreg.country,
                    district: userreg.district,
                    pincode: userreg.pincode,
                    state: userreg.state,
                    vill: userreg.village
                }
            }
        }
        ans['donors'].push(temp);
        const uid = ans.uid;
        const docRef = db.collection('campaigns').doc(uid);

        // update
        docRef.update(
            {
                campaignsList: [ans]
            }
        )
            .catch((err) => {
                alert(err);
                props.showalert('Process is failed', 'danger');
                console.log(err);
            })
        props.showalert('Thanks for donating', 'success');
        navigate('/reciept')
        console.log('done')
    }
    return (
        <div className='con'>
        <h1 className='tit'> <i class="fa-solid fa-circle-dollar-to-slot" style={{color:'green', textDecoration:'none'}}></i>   Donate Now   <i class="fa-solid fa-circle-dollar-to-slot" style={{color:'green', textDecoration:'none'}}></i></h1>
            <form onSubmit={handlesubmit} className='formcon'>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required value={userreg.name} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="age">Age:</label>
                    <input type="text" id="age" name="age" required value={userreg.age} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required value={userreg.email} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender" required value={userreg.gender} onChange={handelinput}>
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {/* <div class="form-group">
                    <label for="gender">Gender</label>
                    <input type="text" id="gender" name="gender" required value={userreg.gender} onChange={handelinput} />
                </div> */}

                <div class="form-group">
                    <label for="mobile">Mobile Number:</label>
                    <input type="tel" id="mobile" name="mobile" required value={userreg.mobile} onChange={handelinput} />
                </div>



                <div class="form-group">
                    <label for="city">City:</label>
                    <input type="text" id="city" name="city" required value={userreg.city} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="country">Country:</label>
                    <input type="text" id="country" name="country" required value={userreg.country} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="district">District:</label>
                    <input type="text" id="district" name="district" required value={userreg.district} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="pincode">Pincode:</label>
                    <input type="text" id="pincode" name="pincode" required value={userreg.pincode} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="state">State:</label>
                    <input type="text" id="state" name="state" required value={userreg.state} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="village">Village:</label>
                    <input type="text" id="village" name="village" required value={userreg.village} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="amount">Amount:</label>
                    <input type="text" id="amount" name="amount" required value={userreg.amount} onChange={handelinput} />
                </div>

                <div class="form-group">
                    <label for="desc">Description:</label>
                    <input type="text" id="desc" name="desc" height={200} required value={userreg.desc} onChange={handelinput} />
                </div>
                <div class="form-group">
                    <label for="image">Image:</label>
                    <input type="file" id="image" name="image" required accept="image/*" onChange={handleFileUpload} />
                </div>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Form
