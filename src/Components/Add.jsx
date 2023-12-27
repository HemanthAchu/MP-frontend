import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../services/allAPI.JS';

function Add({setUploadVideoResponse}) {
  const [upload , setupload]=useState({
    id:"",
    caption:"",
    url:"",
    link:""
  })
  console.log(upload);
const [show,setShow]=useState(false);
const handleClose =()=>setShow(false);
const handleShow=()=>setShow(true)


//https://www.youtube.com/watch?v=hWTSVSvLuCk
const getYoutubeEmbedLink =(e)=>{


      const {value}= e.target
      if (value.includes("v=")) {
        let vid = value.split("v=")[1].slice(0,11)
        setupload(
          {
          
            ...upload,link:`https://www.youtube.com/embed/${vid}`
          }
        )
      }else{
        setupload({...upload,link:""})
      }



  }

  const handleUpload= async ()=>{
      const {id,caption,url,link} =  upload
      if(!id||!caption||!url||!link){
        alert("Upload from is incomplete. please fill the form completey!!!")
      }else{
        //store uploadvideo in Json server
   const result   =  await uploadNewVideoAPI(upload)
if(result.status>=200 && result.status<300){
  handleClose()
       setupload({
        id:"",
        caption:"",
        url:"",
        link:""
      })
      //share result data to view compount
      setUploadVideoResponse(result.data)
    }else{
      alert(result.message)
    }
       
  }
}

  return (
    <>
    <div className='d-flex align-items-center'>
      <h4 style={{height:"45px"}}>Upload New Videos</h4>
      <button onClick={handleShow} className='btn'> <i style={{fontSize:"30px"}} class="fa-solid fa-photo-film"></i> </button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload new Video From </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p> Please Fill the following details !!!</p>
         <FloatingLabel
        controlId="floatingInput"
        label="Enter Video ID"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setupload({...upload,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="floatingPassword" label="Enter Video Caption">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setupload({...upload,caption:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="floatingPassword" label="Enter Video Image URL">
        <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setupload({...upload,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" controlId="floatingPassword" label="Enter YouTube Video Link">
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={getYoutubeEmbedLink}/>
      </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      </>


  )
}

export default Add
