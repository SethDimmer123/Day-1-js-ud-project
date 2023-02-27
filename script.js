// i need to change the class of active when clicking on each card

// i need to bring all the panels into my javascript

const panels = document.querySelectorAll('.panel')
// querySelector allows me to select any class from html i selected all of the classes of .panel

// console.log(panels); 
//prints out NodelIst of each div class of panel and on the first one active
panels.forEach((panel) => { // i passin the purple () what i want to use for each iteration
    // console.log(panel)
    // in the console it will show me each panel

    panel.addEventListener('click',() => {
        removeActiveClasses()

        panel.classList.add('active') // add the class of active to the panel i click on.
    })
    // at this point the class of active is still on the other panel classes

    // i want to RETRACT THE OTHER PANELS WHEN I OPEN 1 of them
    // how do i do that?
    
    /**i need to REMOVE THE ACTIVE CLASS ON THE OTHER panel classes */
})

function removeActiveClasses() {
    panels.forEach((panel) => { // panels because that is what i am looping through
        panel.classList.remove('active')
    })
}


// first i create the function to remove all the active classes when i open 1 of them

// then i need to call the function by placing it in the click event(line 15)