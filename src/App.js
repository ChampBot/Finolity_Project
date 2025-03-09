
// import ReactDOM from 'react-dom/client';
import './App.css';
import { Header } from './components/header/header';
import { MainBanner } from './components/main-banner/main-banner';
import { WhatWeDo } from './components/what-we-do/what-we-do';
import { HowWeDo } from './components/how-we-do/how-we-do';
import { LatestNews } from './components/latest-news/latest-news';
import { UpcomingEvents } from './components/upcoming-events/upcoming-events';
import {Footer} from './components/footer/footer';
// import Button from './Button';
// import Display from './display';

function App() {
  // const [counter, setCounter] = useState(0);

  // const handleClick = (increment) => {
  //   setCounter(counter+increment);
  // };

  return (<>
    {
      <div className="container-fluid p-0">
        <Header ></Header> 
        <MainBanner></MainBanner>
        <WhatWeDo></WhatWeDo>
        <HowWeDo></HowWeDo>
        <LatestNews></LatestNews>
        <UpcomingEvents></UpcomingEvents>
        <Footer></Footer>
      </div>
    /* <Button onClickFunction={handleClick} increment={1}/>
    <Button onClickFunction={handleClick} increment={10}/>
    <Button onClickFunction={handleClick} increment={30}/>
    <Button onClickFunction={handleClick} increment={100}/>
    <Display message={counter} /> */
    }
  </>);
}

export default App;
