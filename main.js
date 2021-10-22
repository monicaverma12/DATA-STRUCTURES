name_of_array = []

function submit() {
   
        var name = document.getElementById("nameofstudent").value;
        name_of_array.push(name);
    
  
    document.getElementById("display_name").innerHTML= name_of_array;
   
}

function sorting()
 { name_of_array.sort(); 
    console.log(name_of_array);
     document.getElementById("display_name").innerHTML = name_of_array; 
    }