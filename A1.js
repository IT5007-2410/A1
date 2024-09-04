//Sample database. Please modify this to suit your needs.
var database = 
    [
        [1, "Grocery Shopping", 85.5],
        [2, "Monthly Rent", 1200]
    ];
//Print to check if the database is populated correctly.
console.log(database);


//Create a variable to hold the maximum seen ID in your system. Useful later to create unique IDs for new expenses.

/*Q4: Function to Display
*/
function display()
    {   
        var tbl = document.getElementById("displayTable");
        /* Display the expenses in the form of a table. 
        The for loop shown in lecture could draw only 1D table. Write your own code to create a 2D table.*/
        
    }

/*Q2: Function to ADD 
*/
function add()
{
    //Read Element values from the HTML using DOM read operations
    

    //check if values read are correct using console log
    

    //Add to the Database. Make sure to set the correct value of serial number. Javascript uses 0 based index, whereas common people use 1 based index.
    
}

/*Q3: Function to ADD 
*/
function update()
{
    //Read Element values from the HTML using DOM read operations
    

    //check if values read are correct using console log
    

    //Search and identify the right expense to update. Then, update the Database
    
    
}

function deletefn()
{
    //Read Element values from the HTML using DOM read operations
    

    //check if values read are correct using console log
    

    //Search and identify the right expense to delete. Then, save the Database. Check if the item is deleted using console log!
    
}


function main(){
    
    /* Q4:  Listener for Display Tab. 
    Write code to uniquely identify the Display Tab in the HTML document using getElementbyID.
    Attach an event listener to it.
    Make the event listener call display() function defined above.
    */
    

    /* Q2:  Listener for Add button. 
    Write code to uniquely identify the addExpense in the HTML document using getElementbyID.
    Attach an event listener to it.
    Make the event listener call add() function defined above.
    */
    
    /* Q3:  Listeners for Update and Delete button. 
    Write code to uniquely identify the updateExpense and deleteExpense in the HTML document using getElementbyId.
    Attach an event listener to each.
    Make the event listener call update() and delete() functions defined above.
    */

    
       
}

/*Q1: Function to display only the tab that is selected in the navigation bar
Call this function from HTML (using onclick) with a different parameter depending on which nav button is pressed.
E.g., when Add is pressed, call showTab('Add')
Hidden property can be set using the syntax:
document.getElementById('Add').hidden = true
*/
function showTab(select)
{
    
    

}