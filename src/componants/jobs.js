import '../css/jobs.css'
import icon from '../images/icons8-chercher-16.png'

export default function Jobs(){
    return(
        < div class='jobs2' id='Job'>
         <div class='container-fluid row mb-5 '>
                <div class='col-md-12 '>
                    <h1 style={{color:'#7862E9',fontWeight:'bold',textAlign:'center'}}> Uncover Your Perfect Job</h1>
                </div>
            </div>
        <div class='container-fluid align-items-center row main-section jobs'>
           
<div class='col-md-6'>
    <div class='titles'>
        <h3>what</h3>
        <span>Job Title,Keywords or Company</span>
    </div>
    <div class="input-container form-group ">
  <input type="text" class='form-control' />
  <img src={icon} alt="Votre image"/>

</div>


        </div>
        <div class='col-md-6 '>
    <div class='titles'>
        <h3>Where</h3>
        <span>City,State or Zip Code</span>
    </div>
    <div class="input-container form-group ">
  <input type="text" class='form-control' />
  <img src={icon} alt="Votre image"/>

</div>

        </div>
    
        </div>
        <div class='conatiner-fluid col-md-12 align-items-center mb-5  d-flex resumesection' style={{textAlign:'center'}}>
        <div class='row'>
        <div class='col-md-12 ' >
            <button class="btn button mt-3 mb-3" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Find Jobs</button>
        </div>
    </div>
           
        </div>
        <div className='container-fluid col-md-12 align-items-center mb-5 d-flex inputsection'>
        <a href="/" style={{textDecoration:'none'}}><h5 class='align-items-center ' style={{fontWeight:'bold',color:'#DC6C5E'}}>
            <div class="input-group mt-1">
  <label for="inputGroupFile02" class="form-control-label">Upload Your Resume</label>
  <input type="file" class="form-control" id="inputGroupFile02" style={{display:"none"}}/>
</div>

            </h5></a><span style={{color:'gray',marginLeft:'5px'}}>  -- it only takes a few seconds</span>
        </div>
        <div class='container-fluidrow  align-items-center  popular'>
        <h1 style={{color:'#7862E9',fontWeight:'bold',textAlign:'center'}} className='heading1popular'>Popular Searches</h1>
            <div class='col-md-12 d-flex cardes'>
                <div class='cardpopular'>
                    <div><p>Part Time</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Sales</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Humain Resources</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>IT Technologie</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Remote Job</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
            </div>
            <div class='col-md-12 d-flex cardes'>
                <div class='cardpopular'>
                    <div><p>Construction</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Marketing</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Retail</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Health Care</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
                <div class='cardpopular'>
                    <div><p>Customer Services</p></div>
                    <img src={icon} alt="Votre image"/>
                </div>
            </div>
        </div>
        </div>
    )
}