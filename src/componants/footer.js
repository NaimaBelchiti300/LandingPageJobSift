import '../css/footer.css'

export default function Footer(){
    return(
        <>
        <div className='container-fluid row align-items-center  mt-5 footer'>
<div className='col-md-6 foter1'>
<p className="footer-paragraph">
Jobsift: Your ultimate tool for job hunting ! Our platform simplifies the job search process by allowing you to build your resume, search for jobs by category, and seamlessly apply for positions.     </p>
</div>
<div className='col-md-3 footer2'>
    <h3>Helpful Links</h3>
    <li>Jobs Ctegory</li>
    <li>Build Your Resume</li>
    <li>Search and Apply job</li>
</div>
<div className='col-md-3 footer3'>
<h3>Contact Us</h3>
    <li>jobsift@gmail.com</li>

    </div>

        </div>
        <div className='container-fluid  row align-items-center mt-5 foterfinal' style={{backgroundColor:'#DC6C5E'}}>

            <div className='col-md-12 text-center p-2 '>
                <h3 style={{color:'white'}}>© 2024, Jobsift All Rights Reserved</h3>
            </div>

        </div>
        </>
    )
}