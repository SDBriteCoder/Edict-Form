function form_validate(){
    var regex = /^[a-zA-Z]{0,14}$/;
    let name = document.forms["animi-forms"]["name"].value;
    let epi = document.forms["animi-forms"]["episodes"].value;
    if (name == "")
    {
        alert("Empty");
        return false;
    }
    else if(name.length < 8)
    {
        alert("Name length cannot be lesser than 8 characters!");
        return false;
    }
    else if(name.length >15)
    {
        alert("Name length cannot be greater than 15 characters!");
        return false;
    }    
    else if(!regex.test(name))
    {
        alert("Name cannot have characters other than alphabets!");
        return false;
    }
    alert("Hurray, the data is Accepted!");
    return true;     
}