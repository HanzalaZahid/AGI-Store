$(document).ready(
    function()
    {
        let buttons = document.querySelectorAll('.courses .courses_type .buttons .button');
        let courses = document.querySelectorAll('.courses .courses_type .course_detail .course');
        buttons.forEach((element, index)=>
            {
                element.addEventListener('click', function()
                {
                    courses.forEach(element=>
                        {
                            element.style.display = 'none';
                        })
                        courses[index].style.display = 'flex'
                })
            }
        )
    }
)