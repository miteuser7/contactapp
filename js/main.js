
   if(localStorage.getItem("contacts")==null)
localStorage.setItem("contacts",JSON.stringify([]));

viewData();

var tempIndex = -1;

function addContact() {
   var contact = getcontact();
    var contacts = getDataFromLocalStorage();
    contacts.push(contact);
    updateDataToLocalStorage(contacts);
    clearformdata();
    viewData();
}



function viewData() {
    var contacts=getDataFromLocalStorage();
    var data = "";
    if(contacts.length==0){
        data="contacts not yet added....ha ha ha ha"
    }else{
    
    data += "<table id='contacts'>"
    for (var i = 0; i < contacts.length; i++) {
        data += "<tr>";
        data += "<td>" + contacts[i].name + "</td>";
        data += "<td>" + contacts[i].email + "</td>";
        data += "<td>" + contacts[i].mobile + "</td>";
        data += "<td><button onclick=deleteContact(" + i + ") > delete </button></td > "
        data += "<td><button onclick=EditContact(" + i + ")> Edit</button></td> ";
        data += "</tr>";


    }
    data += "</table>";
    }
    document.getElementById("content").innerHTML = data;
}

function deleteContact(index) {
    var contacts=getDataFromLocalStorage();
    contacts.splice(index, 1);
    updateDataToLocalStorage(contacts);
    viewData();
}

function EditContact(index) {
    var contacts=getDataFromLocalStorage();
    contact = contacts[index];
    tempIndex = index;
    document.getElementById('cname').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('mobile').value = contact.mobile;
    document.getElementById('add').style.display = "none";
    document.getElementById('update').style.display = "block";
}

function updateContact() {
    var contacts=getDataFromLocalStorage();
    
    contact = getcontact();

    contacts.splice(tempIndex, 1, contact);
    updateDataToLocalStorage(contacts);
    clearformdata();
    document.getElementById('add').style.display = "block";
    document.getElementById('update').style.display = "none";
    viewData();
}

function getcontact() {
    var cname = document.getElementById('cname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;


    contact = {

        "name": cname,
        "email": email,
        "mobile": mobile
    };

    return contact;
}

function clearformdata() {
    document.getElementById("cname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("mobile").value = " ";
}
function getDataFromLocalStorage(){
    contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts;
    
}
function updateDataToLocalStorage(updatedData){
    localStorage.setItem("contacts",JSON.stringify(updatedData));
}
