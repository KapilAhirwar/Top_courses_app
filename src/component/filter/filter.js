// import './filter.css';
function filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function handler(title){
        setCategory(title);
    }
    return(
        <div >
            {
                filterData.map( (data)=> {
                    return <button className={` text-white m-[15px] bg-neutral-950 pl-[10px] pr-[10px] pb-[4px] rounded-[5px] cursor-pointer text-[1.09rem] ${category === data.title ? " border-white bg-opacity-100" : "bg-opacity-40 "}` } key={data.id} onClick={() => handler(data.title)}> {data.title}</button>
                })
            } 
        </div>
    )
}
export default filter;
