import './pack.css';
import Card from './card/card'
import { useState } from 'react';

function CardPack(props){

    let info = props.calling;
    const category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    function getcourse (){
        if(category === "All"){
            let allcourse = [];
            Object.values(info).forEach( array => {
                array.forEach( courseData => {
                    allcourse.push(courseData);
                })
            })
            return allcourse;
        }else{
            return info[category];
        }
    }
    return(
        <div  className='cardHold'>
            {
                getcourse().map( (course) => {
                    return <Card key={course.id} 
                    course={course} 
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}
export default CardPack;











