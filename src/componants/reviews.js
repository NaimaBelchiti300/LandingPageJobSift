
import '../css/Reviews.css'
import profile from '../images/3135715.png'
import profile2 from '../images/11820363.png'
import stars from '../images/image-removebg-preview (7).png'
import stars2 from '../images/image-removebg-preview (8).png'
import profile3 from '../images/146016.png'
export default function Reviews(){
    return(
  <div className='reviewsss2'>
<div class='container-fluid row align-items-center Reviews'>
<div class='col-md-12 titlereviews'>
    <h1>What Users Say About Jobsift</h1>
</div>
</div>

<div class='container-fluid row align-items-center reviewss'>
<div class='col-md-4 firstcard '>
    <div className='profile'>
      <img src={profile}/>
      <span>Salim Aallami
        <br/>
        <span className='span2'>Software Engineering</span>
      </span>
    </div>
    <div className='paragraphe'>
      <p>JobSift made job hunting a breeze with its easy interface and personalized recommendations, saving me time and effort. Highly recommended for anyone looking for their next career move!</p>
    </div>
    <div className='stars'>
      <img src={stars}/>
    </div>
</div>


<div class='col-md-4 firstcard'>
    <div className='profile'>
      <img src={profile2}/>
      <span>Solaymane Hinaddi 
        <br/>
        <span className='span2'>IA Engineering</span>
      </span>

    </div>
    <div className='paragraphe'>
      <p>JobSift made job hunting a breeze with its easy interface and personalized recommendations, saving me time and effort. Highly recommended for anyone looking for their next career move!</p>
    </div>
    <div className='stars'>
      <img src={stars2}/>
    </div>
</div>



<div class='col-md-4 firstcard'>
    <div className='profile'>
      <img src={profile3}/>
      <span>Sarah Salimi
        <br/>
        <span className='span2'>Senior Frontend </span>
      </span>

    </div>
    <div className='paragraphe'>
      <p>JobSift's user-friendly platform and personalized suggestions simplify job searching, saving time and stress. Highly recommended for job seekers!</p>
    </div>
    <div className='stars'>
      <img src={stars}/>
    </div>
</div>


</div>
  </div>

        

    )
}