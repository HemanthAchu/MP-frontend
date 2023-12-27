import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div className='container mt-5 mb-5 '>
    <div className=' row d-flex justify-content-between align-items-center'>
     <div className='col-lg-5'>
      <h3 style={{height:'100px'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
     <p style={{textAlign:'justify'}}>Media Player App .will allow to add and remove their upload videos and also arrange in different chategories by drag and drop</p>
    <Link to={'/home'} className='btn btn-info m-3'>Get Started</Link>
     </div>
     <div className="col"></div>
     <div className='col-lg-6'>
      <img style={{width:'100%'}} src="https://media3.giphy.com/media/XhbIWW3liEpSPXsHU5/200.webp?cid=ecf05e4781b76t91c6b6dno1rlh2it45406xb8x3vy05gt6b&ep=v1_gifs_search&rid=200.webp&ct=g" alt="no image" />
     </div>
    </div>
    <div  className='Features'>
      <h3 style={{height:'80px'}} className='text-center'>Features</h3>
      <div className=" cards mt-5 d-flex justify-content-between">
        {/*create cards*/}
        <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://media3.giphy.com/media/3oEjHECc1GftirnHZm/200.webp?cid=ecf05e474k5z5ta614xg7w9nvvp2utgylrha13klovx2xbzx&ep=v1_gifs_search&rid=200.webp&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'60px'}} >Managing Videos</Card.Title>
        <Card.Text>
         user can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
    {/*create cards*/}
    <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://media3.giphy.com/media/VnIoecjQ3caw8/200w.webp?cid=ecf05e47qjx9sdemc6okx63m7ep9w9j30ncn7c78ca9taxoj&ep=v1_gifs_search&rid=200w.webp&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'60px'}} >Categories Videos</Card.Title>
        <Card.Text>
         user can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
    {/*create cards*/}
    <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://media0.giphy.com/media/3o8dpbfzkgiDrCwbxm/giphy.webp?cid=ecf05e47qjx9sdemc6okx63m7ep9w9j30ncn7c78ca9taxoj&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'60px'}} >Watch history</Card.Title>
        <Card.Text>
         user can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  <div className=' row mt-5 border rounded p-5'>
  <div className="col-lg-6 ">
    <h3 style={{height:'70px'}} className='text-warning'>simple,Fast and Powerfull</h3>
  <p><span className='fs-5'>Play Everything</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum tenetur ad alias omnis, impedit neque perspiciatis deserunt, quas debitis rem voluptatibus vero qui quidem reiciendis a sit accusamus doloribus.</p>
  <p><span className='fs-5'>Cetagories videos</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum tenetur ad alias omnis, impedit neque perspiciatis deserunt, quas debitis rem voluptatibus vero qui quidem reiciendis a sit accusamus doloribus.</p>
    <p><span className='fs-5'>Watch History</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum tenetur ad alias omnis, impedit neque perspiciatis deserunt, quas debitis rem voluptatibus vero qui quidem reiciendis a sit accusamus doloribus.</p>
  </div>
  <div className="col-lg-6"><iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=qV7OWSmm-0oeQls1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>

    </div>

  )
}

export default LandingPage
