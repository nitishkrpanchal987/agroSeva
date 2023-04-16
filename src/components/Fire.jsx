import React, { useEffect, useState } from 'react'
import {db} from '../firebase';

const Fire = () => {
  const [alldocs, setdocs] = useState([]);
  // const q = query(collection(db, "cities"), where("capital", "==", true));
      useEffect(()=>{
        db.collection("campaigns").get()
        .then((doc) => {
          doc.forEach((docu)=>{
            setdocs((prev)=>{
              return [...prev, docu.data()]
            })
          })
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      },[])
      console.log(alldocs);

      // const fetchAll = (e)=>{
      //   e.preventDefault();

      //   useEffect(()=>{
      //     db.collection("campaigns").get()
      //     .then((doc) => {
      //       doc.forEach((docu)=>{
      //         console.log(docu.data())
      //       })
      //   }).catch((error) => {
      //       console.log("Error getting document:", error);
      //   });
      //   },[])
      // }
  // const fetchAll = async (e) => {
  //   const docRef = doc(db, "campaigns");
  //   const docSnap = await getDocs(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  //   //     e.preventDefault();

  //   //     const querySnapshot = await getDocs(q);
  //   //     querySnapshot.forEach((doc) => {
  //   //       // doc.data() is never undefined for query doc snapshots
  //   //       console.log(doc.id, " => ", doc.data());
  //   //     });
  //   //     console.log(alldocs);
  // }
  return (
    <div>
      <button>FETCH DATA</button>
    </div>
  )
}

export default Fire
