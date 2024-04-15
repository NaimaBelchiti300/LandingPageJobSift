import img from '../images/Neutral Pink Modern Circle Shape LinkedIn Profile Picture (1).png'
import '../css/resume.css'
export default function Resume(){
    return(
        <>
        
        <div className='container-fluid row align-items-center m-5 resumee'>

            <div className='col-md-4 imgresume'>
                <img src={img} width={400} height={400}/>
            </div>
            <div className='col-md-8'>
                <div className='resumeheading'>
                <h1>Follow our steps we </h1>
                <h1>will help you</h1>
                </div>
                <div className='d-flex resumesectionpara'>
                    <div className='col-md-5 sectionresume'>
                        <span>Register Your Account</span>
                        <p>Sign up by providing your name, email, and a password on the platform's registration page.</p>
                    </div>
                    <div className='col-md-5 sectionresume' >
                        <span>Search Your Job </span>
                        <p> Look for jobs online that match what you want, use filters to find the right ones, then send your resume to the ones you like.</p>
                    </div>       
                </div>
                <div className='d-flex resumesectionpara'>
                    <div className='col-md-5 sectionresume'>
                        <span>Apply for Dream Job</span>
                        <p> Prepare your resume, visit the company's website, and follow instructions to submit your application.</p>
                    </div>
                    <div className='col-md-5 sectionresume'>
                        <span>Apply Your Resume </span>
                        <p>When you find a job you want, send your resume directly to the employer as they ask you to.</p>
                    </div>       
                </div>
              
            </div>
        </div>
        </>
    )
}