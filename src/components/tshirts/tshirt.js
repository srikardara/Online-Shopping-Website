import React from 'react'
import { Link } from 'react-router-dom';
import '../tshirts/tshirt.css'
function tshirt() {
  return (
    <div className='container'>
    <div className='row'>
    <div className='h  col-4 col-md-2 col-sm-4'>
    <img className="p img-fluid" src="https://m.media-amazon.com/images/I/61KUmnk7dnL._SY741_.jpg" alt="" />
    <div className='view'>
    <Link  to="/Men/tshirts/t1"> <h6>BULLMER</h6></Link>
    <p>print Oversized T-shirt </p>
    <h4>Rs. 389/-</h4></div>
  
  </div>
  <div className='h flex col-4 col-md-2 col-sm-4'>
    <img className="p img-fluid" src="data:image/jpeg;base64,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" alt="" />
    <div className='view'>
    <Link  to="/Men/tshirts/t1"> <h6>H&M</h6></Link>
   
    <p>Men Pure Cotton..</p>
    <h4>Rs. 699/-</h4></div>
   
  </div>
  <div className='h col-4 col-md-2 col-sm-4'>
    <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYxrmWxK77Ctp_ofFWTWlIuY_8giQg3nrV1Y6cr-2HA&s" alt="" />
    <div className='view'>
    <Link  to="/Men/tshirts/t1"><h6>Roadster</h6></Link>
    <p>Men Charcoal Grey..</p>
    <h4>Rs. 999/-</h4></div>
  
  </div>
  <div className='h col-4 col-md-2 col-sm-4'>
    <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHlg_iYErwuNMY1W2A3UpyJkm3cazMljXUoDkhVJiuBX8NBronL40figO6MXdN-laJ8I&usqp=CAU" alt="" />
    <div className='view'>
    <Link  to="/Men/tshirts/t1"><h6>THE HOLLANDER</h6></Link>
    <p>Graphic Printed Drop.. </p>
    <h4>Rs. 489/-</h4></div>
  
  </div>
  <div className='h col-4 col-md-2 col-sm-4'>
    <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Nyc2vhN5VvalLxIdjM5nNBj_isnjokVA4A6L3SoFBQ&s" alt="" />
    <div className='view'>
    <Link  to="/Men/tshirts/t1"><h6>Bewakoof</h6></Link>
    <p>Official Rick and..</p>
    <h4>Rs. 679/-</h4></div>

  </div>
  <div className='h col-4 col-md-2 col-sm-4'>
  <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_VGzJjZoCXmNn0sqqsqsdAUDgiD1W3anuD5Jhm-FYg&s" alt="" />
  <div className='view'>
  <Link  to="/Men/tshirts/t1"> <h6>
  Roadster</h6></Link>
 
  <p>
  The Lifestyle Co-</p>
  <h4>Rs. 989/-</h4></div>
 
</div>
  <div className='h col-4 col-md-2 col-sm-4'>
 
    <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTm6AHefCxreAwq8n6OXISiZkrUgwOba2mtwap1rm0w&s" alt="" />
    <div className='view'>
    <Link  to="/Men/tshirts/t1"><h6>Elibolz</h6></Link>
    
    <p>Graphic Printed Cotton..</p>
    <h4>Rs. 189/-</h4></div>
  </div>
  <div className='h col-4 col-md-2 col-sm-4'>

  <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI05tQ8FQC8MwqGXnGwgv3QwUJpHCq71FPz_aM0dMAMg&s" alt="" />
  <div className='view'>
  <Link  to="/Men/tshirts/t1"><h6>Kook N Keech</h6></Link>

  <p>Men Solid Regular.. </p>
  <h4>Rs. 384/-</h4></div>
 
</div>
<div className='h col-4 col-md-2 col-sm-4'>
  
  <img className="p img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTDVHdhUIzSh2TmHKcKRe5gUqcWfa2Xvenb1SPYFS0w&s" alt="" />
  <div className='view'>
  <Link  to="/Men/tshirts/t1"><h6>Roadster</h6></Link>
    <p>Men White Navy..</p>
    <h4>Rs. 1189/-</h4></div>

</div>
<div className='h col-4 col-md-2 col-sm-4'>

  <img className="p img-fluid" src="https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg" alt="" />
  <div className='view'>
  <Link  to="/Men/tshirts/t1"><h6>Austin wood</h6></Link>

    <p>Men Grey Striped.. </p>
    <h4>Rs. 689/-</h4></div>

</div>
</div>
</div>
  )
}

export default tshirt
