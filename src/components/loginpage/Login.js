import React,{useState} from 'react'
import styles from './login.module.css'
import axios from 'axios'
import { photoArray } from './photoArray'
import { SingleBrochure } from '../single brochure/SingleBrochure'



const accounts = {
    name:'paul',
    password:12345
}
// },{
//     name:'john',
//     password:12346
// },{
//     name:'george',
//     password:12347
// },{
//     name:'ringo',
//     password:12348
// },]


export const Login = () => {

    const [newAccount, setNewAccount] = useState({
        name:'',
        password:''
    });
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    const [imagesArray, setImagesArray] = useState([...photoArray])
    const [selectedPhoto, setSelectedPhoto] = useState(0)
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('https://images.unsplash.com/photo-1469796466635-455ede028aca?ixid=MnwzMDI1Njd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbi1yZXNvcnR8ZW58MHx8fHwxNjQ1NDYwODE4&ixlib=rb-1.2.1')
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState(``)
    const [clickedPhoto, setClickedPhoto] = useState('')
    const [show, setShow] = useState(false)
    const login = ()=>{
        console.log(newAccount)
        
            
            if(newAccount.name == accounts.name && newAccount.password == accounts.password){
              setMessage(newAccount.name)
            }else{
                setMessage('wrong');
            }
           
       }
       const gallery = imagesArray.length  
      
       const displayPhoto = (pic,num)=>{
        setShow(true)
        setDisplay(`${styles.bigPicture}`)
        setClickedPhoto(pic)
        setSelectedPhoto(num)
        console.log(pic)
        console.log(num)
      }


      const exit = ()=>{
        setShow(false);
        if(show === false){
          setSelectedPhoto(null)
        }
      }
       
      

      const nextBrochure = ()=>{
        setSelectedPhoto(selectedPhoto === gallery - 1? 0 :selectedPhoto + 1)
        console.log(selectedPhoto)
      } 
      const prevBrochure = ()=>{
        setSelectedPhoto(selectedPhoto === 0? gallery - 1 :selectedPhoto - 1)
        console.log(selectedPhoto)
      }
      
    
 const test = async()=>{
    await  axios.get(`https://api.unsplash.com/search/photos?query=beach-resort&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      .then(res=>{
        console.log(res.data)
        for (let i = 0; i < res.data.results.length; i++) {
          console.log(res.data.results[i].urls.raw)
          
        }
        
        console.log(res.data.results[0].urls.raw)
        setImage(res.data.results[0].urls.raw)
        // setImagesArray(res.data.results)
        
      }).then(()=>{
        console.log(imagesArray)
      })
      .catch(err=>{console.log(err)})
    }  


  return (
    <div className={styles.page}>
          <div className={styles.imagesContainer}>
            {
            imagesArray.map((images,i)=>{
              
              return  (

            <>
            <SingleBrochure key ={i} 
            onClick={()=>{displayPhoto(images.photo,i)}}
             src={images.photo} alt={images.alt}
             location={images.location}/>
            </>
             ) } )}
             {show?<div className={styles.cover}>
               <button className={styles.leftButton} onClick={prevBrochure}><i className="fas fa-arrow-left"></i></button>  
               { imagesArray.map((brochure,index)=>{
                 return(  <div  className={display} key={index}>
                 
              
              {index === selectedPhoto &&<><button className={styles.exit} onClick={exit}><i className="fas fa-times"></i></button>
              <img src={brochure.photo} alt={brochure.alt}/>
              <p><b>location:</b> {brochure.location}</p>
              <p><b>photo by:</b> {brochure.photographer}</p></>}
              
             </div>)})
             } <button className={styles.rightButton} onClick={nextBrochure}><i className="fas fa-arrow-right"></i></button>
             </div>:<></>}
            
          
          </div>
        
        </div>
  )
}
