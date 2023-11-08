import './App.css';
import Header from "./component/header"
import Pack from './component/pack/pack';
import Filter from "./component/filter/filter"
import {filterData,apiUrl} from "./data"
import {useEffect, useState} from "react";
import Spinner from './component/loader/loade'
import {toast} from "react-toastify";



const App = () => {

  const [calling,setcalling] = useState(null);
  const [loader,setloader]= useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  // setfilter(data);
  async function fetchData () {
    setloader(true);
    try{
      const ref = await fetch(apiUrl);
      const output = await ref.json();
      setcalling(output.data);
      console.log(output);
    }
    catch(error){
      toast.error('somthing is wrong');
    }
    setloader(false);
  }

  useEffect( ()=>{
    fetchData();
  },[]);

  return (
    <div className="wrap">
      <Header/>
      <div className="fil">
        {/* {
          filterData.map((tur)=>{
            return <Filter {...tur}   ></Filter>
          })
        } */}
        <Filter filterData={filterData} category={category} setCategory={setCategory}  ></Filter>
        
      </div>

      <div>
        {
          loader? (<Spinner/>) : (<Pack calling={calling} category={category} />)
        }
      </div>

    </div>
  );
};

export default App;
