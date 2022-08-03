$(document).ready(
    ()=>
    {
        // SUB_MANU TOGGLE
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

        // NAV HIDE AND DISPLAY USING CLASS ADD
        let navOpenButton = document.querySelector('.courses_and_nav .section_wrapper .head .options .button_menu');
        let navCloseButton = document.querySelector('.courses_and_nav .section_wrapper .head > i');
        let nav = document.querySelector('.courses_and_nav .section_wrapper .catagories');

        navOpenButton.addEventListener('click', ()=>
        {
            nav.classList.add('nav_small_screen');
        })
        navCloseButton.addEventListener('click', ()=>
        {
            nav.classList.remove('nav_small_screen');
        })

        // MENU ACTIVE TABS

        let listItems = document.querySelectorAll('.catagories .nav_list li');
        listItems.forEach(element => {
            element.addEventListener('click', ()=>
            {
                listItems.forEach(elem=>
                    {
                        if (elem.classList.contains('active'))
                        {
                            elem.classList.remove('active');
                        }
                        if (elem.classList.contains('current_item'))
                        {
                            elem.classList.remove('current_item');
                        }
                    })
                element.classList.add('active');
                element.classList.add('current_item');
            })
        });
    }
)