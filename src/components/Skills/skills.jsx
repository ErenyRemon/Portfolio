import './skills.css'

export function Skills(){
    return <>
            <div className='mainSkillsDiv'>
        <div className='skillsDiv'>
            <h1>Skills</h1>
            <p style={{width: '1136px'}}> I'm a passionate and dedicated developer with a strong background in both design and development. With hands-on experience in UX/UI Design and Full Stack development, I bring creative solutions and clean code together. I have a solid understanding of frontend technologies like React, HTML, JavaScript, and Bootstrap, along with backend frameworks such as Django, Flask, and Odoo. Whether it's building user-friendly interfaces or developing scalable web applications, I’m always eager to learn, grow, and deliver high-quality results.</p>

        </div>

        <div className='skillsDivDown col-12 d-flex'>
            <div className='skillsDivDownLeft col-6'>
                <h3>My course</h3>
                <hr className='line' />
                <ul className='menuCourse'>
                    <li>UX/UI Design</li>

                    <li>Full Stack</li>
                    <li>Frontend React </li>
                    <li>Logo Design</li>
                </ul>


            </div>

            <div className='skillsDivDownRight col-4'>
                <div className='skillsDivDownCourses1' >
                <div className='skillsDivDownCoursesColor1'>
                    <button className='buttonCourse' >HTML</button>
                    </div>
                </div>

            
            
            <div className='skillsDivDownCourses2' >
            <div className='skillsDivDownCoursesColor2'>
                <button className='buttonCourse'>Javascript</button>
            </div>
            

            </div>
          
                <div className='skillsDivDownCourses3' >
                <div className='skillsDivDownCoursesColor3'>
                    <button className='buttonCourse'>React</button>
                    </div>
                </div>

           
                <div className='skillsDivDownCourses4' >
                <div className='skillsDivDownCoursesColor4'>
                    <button className='buttonCourse'>Bootstrap</button>
                    </div>
                </div>
                <div className='skillsDivDownCourses5' >
                <div className='skillsDivDownCoursesColor5'>
                    <button className='buttonCourse'>Django</button>
                    </div>
                </div>
                <div className='skillsDivDownCourses6' >
                <div className='skillsDivDownCoursesColor6'>
                    <button className='buttonCourse'>ODOO</button>
                    </div>
                </div>
                <div className='skillsDivDownCourses7' >
                <div className='skillsDivDownCoursesColor7'>
                    <button className='buttonCourse'>Flask</button>
                    </div>
                </div>

            

                </div>
        </div>

    </div>

    </>
}