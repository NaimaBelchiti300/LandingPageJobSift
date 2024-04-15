import logo from '../images/Design_sans_titre__11_-removebg-preview.png';
import '../css/test.css';

export default function Test() {
    return (
        <div className='container-fluid row align-items-center teste  ' id='JobSift'>
            <div className='col-md-5 section1 '>
                <h1 class='heading '><span style={{color:'#DC6C5E'}}>Find The Prefect</span></h1>
                <h1 class='heading  '><span style={{color:'#380927'}} >Job For You And </span></h1>
                <h1 class='heading'><span style={{color:'#7862E9'}}>Build Your Resume</span></h1>
                <p class=' mt-4'>Looking for the ideal job? Look no further! Our platform simplifies the job search process, connecting you with opportunities that match your skills and preferences. Say goodbye to endless scrolling and hello to finding your dream job effortlessly. With our intuitive interface and personalized recommendations, your next career move is just a click away.</p>
                <div class=' align-items-center d-flex items'>
                        <input type='text' placeholder='Search By Keywords' class='form-control mt-5 w-100 form'/>
                        <button class='btn  mt-5 ' style={{borderColor:'#DC6C5E',backgroundColor:'white',color:'black'}}>search</button>
</div>
            </div>
            <div className='col-md-7 imagelogooo'>
                <img src={logo} class="logo" style={{ maxWidth: '100%' }} />
            </div>
        </div>
    );
}
