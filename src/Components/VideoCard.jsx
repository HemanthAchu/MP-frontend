import React,{useState} from 'react'
import { Card ,Modal} from 'react-bootstrap'
import { addVideosToHistoryAPI } from '../services/allAPI.JS';
import { removeVideosAPI } from '../services/allAPI.JS';

function VideoCard({video,setdeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    
    setShow(true);
    //generate date to store the history
    const {caption,link}=video
   let time = new Date()
    let timestamp =new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    let videoHistory = {caption,link,timestamp}
    //make apl call
  await addVideosToHistoryAPI(videoHistory)
  
  }
const  deletecard = async(id)=>{
 removeVideosAPI(id)
 setdeleteVideoResponse(true)
}

const dragStarted=(e,id)=>{
console.log("Drag started...video ID :" +id);
e.dataTransfer.setData("videoId",id)
}



  return (
    <>
     <Card draggable onDragStart={e=>dragStarted(e,video?.id)} >
      <Card.Img onClick={handleShow} style={{height:'200px'}} variant="top"  src={video.url} />
      <Card.Body>
       <div className='d-flex justify-content-between'>
       <h5 style={{height:"60px"}}>{video.caption}</h5>
      {insideCategory?null: <i className="fa-solid fa-trash text-danger" onClick={()=>deletecard(video?.id)}></i>}
       </div>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<iframe className='w-100' width="560" height="315" src={`${video?.link}?autoplay=1`} title={`${video.caption}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullScreen></iframe>
        </Modal.Body>
      </Modal>
    


    </>
  )
}

export default VideoCard
