import '../css/main.css'
import icon from '../images/icons8-chercher-16.png'
export default function Main(){
    return(

        <div class='container-fluid align-items-center row main-section mainee' >
            <div class='col-md-12'id='Category'>
<h1 class='haeding1'>Brows Job</h1>
<h1 class='haeding1'> By Category</h1>
            </div>
            <div class='col-md-12 d-flex sectionmain'>
            <div class='card '>
                <p class='d-block align-items-center '><img src={icon} width={30} height={30} />
                Technology and IT</p>
                <span style={{color:'#7862E9'}}>10k Job Vacancy</span>
                <button class="btn mr-2  m-2" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Read More</button>
                </div> 
                <div class='card '>
                <p class='d-block align-items-center '><img src={icon} width={30} height={30} />
                 Management</p>
                <span style={{color:'#7862E9'}}>10k Job Vacancy</span>
                <button class="btn mr-2  m-2" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Read More</button>

                </div> <div class='card '>
                <p class='d-block align-items-center '><img src={icon} width={30} height={30} />
                Engineering </p>
                <span style={{color:'#7862E9'}}>12k Job Vacancy</span>
                <button class="btn mr-2  m-2" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Read More</button>

                </div> <div class='card '>
                <p class='d-block align-items-center '><img src={icon} width={30} height={30} />
                 Medicine</p>
                <span style={{color:'#7862E9'}}>4k Job Vacancy</span>
                <button class="btn mr-2  m-2" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Read More</button>

                </div>
              
                </div>
                <div class='col-md-12 d-flex maine22 '>
                <div class='card ' style={{width:'23%', boxShadow: ' 1px 20px 20px rgba(98, 98, 98, 0.5)'}}>
                <p class='d-block align-items-center '><img src={icon} width={30} height={30} />
                Creative Arts and Design</p>
                <span style={{color:'#7862E9'}}>4k Job Vacancy</span>
                <button class="btn mr-2  m-2" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Read More</button>

                </div> <div class='card 'style={{width:'23%', boxShadow: ' 1px 20px 20px rgba(98, 98, 98, 0.5)'}}>
                <p class='d-block align-items-center '><img src={icon} width={30} height={30} />
                Education and Academia</p>
                <span style={{color:'#7862E9'}}>4k Job Vacancy</span>
                <button class="btn mr-2  m-2" style={{width:'150px',backgroundColor:'#DC6C5E',color:'white'}} type="submit">Read More</button>

                </div>
                </div>
        </div>
    )
}