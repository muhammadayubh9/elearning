import React from 'react'
import CourseCard from '../CourseCard/CourseCard'

function AllCourses(data) {
    var {courses, is_white} = data.data
    return (
        <div className="all_courses">
            {
                courses.map((item, index) => <CourseCard data={{item,is_white,index}} key={index}/>)
            }
        </div>
    )
}

export default AllCourses