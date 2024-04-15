import Banner from './componants/banner';
import Footer from './componants/footer';
import Jobs from './componants/jobs';
import Main from './componants/main';
import Nav from './componants/nav';
import Resume from './componants/resume';
import Reviews from './componants/reviews';
import Test from './componants/test';

function App() {
  return (
      <div className='App'>
      <Nav/>
      <Banner/>
      <Test/>
      <Resume/>
      <Main/>
      <Jobs/>
      <Reviews/>
      <Footer/>
      </div>
   
  );
}

export default App;
