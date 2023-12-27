import React,{useEffect, useState} from 'react'
import { Modal,FloatingLabel,Form,Row,Col,Collapse } from 'react-bootstrap';
import { addCategoryAPI } from '../services/allAPI.JS';
import { getAllCategoryAPI } from '../services/allAPI.JS';
import { removeCategoryAPI } from '../services/allAPI.JS';
import { getAVideoAPI } from '../services/allAPI.JS';
import { updateCategoryAPI } from '../services/allAPI.JS';
import VideoCard from './VideoCard';


function Category({dropResponse}) {
  const[allcategories,setAllcategories] = useState([])
 const [categoryName ,setcategoryName] = useState("")
  const [show, setShow] = useState(false);
const[open,setopen] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[dropResponse])
const getAllCategories = async ()=>{
  const {data} = await getAllCategoryAPI()
  setAllcategories(data)
}

const handleAdd =async ()=>{



  if(categoryName){
    const result = await addCategoryAPI({categoryName,allvideos:[]})
    if(result.status>=200 && result.status<300){
      handleClose()
      setcategoryName("")
      getAllCategories()
    }else{
      alert(result.message)
    }
  }else{
    alert('please fill the form completely')
  }
}
 const removeCategory = async  (id)=>{
  await removeCategoryAPI(id)
  getAllCategories()
 }

const dragOver=(e)=>{
  console.log("video card dragging over the category");
  e.preventDefault()
}

const videoDrop = async (e,categoryId)=>{
  const videoId = e.dataTransfer.getData("VideoId")
  console.log("video id: "+videoId+" dropped!!! Inside the Category :" +categoryId);
const {data} = await getAVideoAPI(videoId)
console.log(data);
const selsetedCategory = allcategories.find(item=>item.id===categoryId)
selsetedCategory.allvideos.push(data)
console.log(selsetedCategory);  
await updateCategoryAPI(categoryId,selsetedCategory)
getAllCategories() 
}
const videoDragStarted =(e,videoId,categoryId)=>{
  let dataShare ={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}  




  return (
    <>
 
    <h4 className='btn btn-info ps-5 pe-5 ' onClick={handleShow}>Category</h4>
    {
      allcategories?.length>0?allcategories.map(category=>(
        <div droppable="true"onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)} className="border rounded p-3 mt-2">
          <div onClick={()=>setopen(!open)} className='d-flex justify-content-between align-items-center'>
            <h6 style={{height:"30px"}}>{category?.categoryName}</h6>
            <button className='btn' onClick={()=>removeCategory(category?.id)}> <i className='fa-solid fa-trash text-danger' ></i></button>
          </div>

   <Collapse in={open}><Row>
    {
     
      category?.allvideos?.length>0?category?.allvideos.map(card=>(
        <Col sm={12}draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}
         className='mb-2' >
        <VideoCard video={card} insideCategory={true} />
        </Col>
      )):null
    }
  
   </Row></Collapse>


        </div>
      )):<p className=" fa-solid  fs-5 text-warning mt-2">
      No Categories are added yet!!!
      </p>
    }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='row'>
      <FloatingLabel className='col-lg-9' controlId="floatingPassword" label="Category Name">
        <Form.Control type="text" placeholder="Password" onChange={e=>setcategoryName(e.target.value)} />
      </FloatingLabel>
      <button onClick={handleAdd}  className='btn btn-info col-lg-2 '>Add</button>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Category
