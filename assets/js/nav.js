$(document).ready(
    ()=>
    {
        let dropdownbuttons = document.querySelectorAll('.courses_and_nav .section_wrapper .catagories .nav_list .list > li > a i');
        dropdownbuttons.forEach(element => {
            element.addEventListener('click', (evt)=>
            {
                evt.preventDefault();
                let dropdownList = element.parentElement.parentElement.querySelector('.subnav');
                if (dropdownList.style.display == 'flex')
                {
                    dropdownList.style.display = 'none';
                    element.classList.remove('rotate')
                }
                else
                {
                    dropdownList.style.display = 'flex';
                    element.classList.add('rotate')
                    console.log(dropdownList.classList)
                }
            })
        });
    }
)