import HeroSection from './components/HeroSection';

// ye niche (custom Hook) hai jisse mai (FirstName) access kar raha hu aur (About) page me show kar raha hu....
import { useProductContext } from './context/productcontext';


const About = () => {

  const {myName} = useProductContext();
  
  const data = {
    name: "SmartBuys Online"
  }
  return (<>
      {myName}
    <HeroSection myData = {data}/>
    </>);
};

export default About;