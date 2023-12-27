import React, { useEffect, useState } from 'react'
import { Row,Col} from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideosAPI } from '../services/allAPI.JS'
import { getAllCategoryAPI } from '../services/allAPI.JS'
import { updateCategoryAPI } from '../services/allAPI.JS'

function View(UploadVideoResponse,setdropResponse) {
  const [deleteVideoResponse, setdeleteVideoResponse] = useState()
 const [allVideos,setAllVideos] = useState([])
useEffect(()=>{
getAllUploadedVideos()
setdeleteVideoResponse(false)
},[UploadVideoResponse,deleteVideoResponse])
const getAllUploadedVideos = async ()=>{
  const result = await getAllVideosAPI()
 if(result.status===200){
  console.log(result);
  setAllVideos(result.data)
 }else{
  console.log("API failed");
 }
}

const dragOver = (e)=>{
  e.preventDefault()
}
const videoDropped = async(e)=>{
  console.log('fail');
  const{videoId,categoryId} =JSON.parse(e.dataTransfer.getData("data"))
 console.log(videoId,categoryId);
 const {data} = await getAllCategoryAPI()
 const selectedCategory = data.find(item=>item.id==categoryId)
 let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
 console.log(result);
 let{id,categoryName} = selectedCategory
 let newCategory = {id,categoryName,allVideos:result}
 console.log(newCategory);
 const res = await updateCategoryAPI(categoryId,newCategory)
  setdropResponse(res)
}

   
  return (
   <>
   <Row droppable="true" onDragOver={e=>dragOver(e)} onDrag={(e)=>videoDropped(e)} >
    {
    allVideos.length>0?allVideos.map(video=>(
 <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
 <VideoCard setdeleteVideoResponse={setdeleteVideoResponse} video={video}/>
 </Col>
    )):<p className='text-warning fs-3 fw-bolder'>No videos are upload</p>
     
    }
   </Row>
   </>
  )
}

export default View
