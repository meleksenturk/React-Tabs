import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import CompanyInfo from "./components/CompanyInfo";
import './css/appStyle.css'
const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("TOMMY");
  const [currentInfo, setCurrentInfo] = useState({});
  const [buttonIndex, setButtonIndex] = useState(null);
  // console.log(data[0].company);
  // console.log("firstInfo",data[0]);
  useEffect(() => {
    fetchData();
    // console.log("data",data);
  }, [])

  useEffect(() => {
    console.log("currentInfo", currentInfo);
  }, [currentInfo])


  // useEffect(() => {
  // },[verticalLine]);

  // const firstElement = data[0]; 
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    try {
      if (response.status === 200) {
        const resdata = await response.json();
        setCurrentInfo(resdata[0])
        console.log(resdata)
        setData(resdata);
        setLoading(false);

      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  if (loading) {
    return (
      <div className="loadingDiv">
        <Loading />
      </div>
    )
  }


  const newCategory = (category, index) => {
    setButtonIndex(index)
    console.log(index)
    setCurrentCategory(category);
    const info = data.find((item) => item.company === category);
    console.log("info", info);
    setCurrentInfo(info);
  }

  
  return (
    <div className="mainDiv">
      <div className="companies">

          {data.map((item, index) => {
            return (<button className={(index === buttonIndex) ?  "activeButton": "passiveButton"} 
             key={index} 
            onClick={() => newCategory(item.company, index)}>{item.company}</button>)
          })}
        
      </div>

      <div className="companyInfo" >
        <CompanyInfo {...currentInfo} />
      </div>

    </div>
  );
};
export default App;
