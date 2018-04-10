function edit_row(no) {
    document.getElementsById("edit_button" + no).style.display = "none";
    document.getElementsById("save_button" + no).style.display = "block";
    
    var fname = document.getElementsById("fname_row" + no),
        pnum = document.getElementsById("pnum_row" + no),
        address = document.getElementsById("address_row" + no),
    
        fname_data = fname.innerHTML,
        pnum_data = pnum.innerHTML,
        address_data = address.innerHTML;
    
    fname.innerHTML = "<input type='text' id='fname_text " + no + "' value='" + fname_data + "'>";
    pnum.innerHTML = "<input type='text' id='pnum_text" + no + "' value='" + pnum_data + "'>";
    address.innerHTML = "<input type='text' id='address_text" + no + "' value='" + address_data + "'>";
}


function save_row(no) {
    var fname_val = document.getElementById("fname_text" + no).value,
        pnum_val = document.getElementById("pnum_text" + no).value,
        address_val = document.getElementById("address_text" + no).value;
    document.getElementById("fname_row" + no).innerHTML = fname_val;
    document.getElementById("pnum_row" + no).innerHTML = pnum_val;
    document.getElementById("address_row" + no).innerHTML = address_val;
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}



function delete_row(no) {
    document.getElementById("row" + no).outerHTML = "";
}


function add_row() {
    var new_fname = document.getElementById("new_fname").value,
        new_pnum = document.getElementById("new_pnum").value,
        new_address = document.getElementById("new_address").value,
        table = document.getElementById("data_table"),
        table_len = (table.rows.length) - 1,
        row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='fname_row" + table_len + "'>" + new_fname + "</td><td id='pnum_row" + table_len + "'>" + new_pnum + "</td><td id='address_row" + table_len + "'>" + new_address + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'><input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
    document.getElementById("new_fname").value = "";
    document.getElementById("new_pnum").value = "";
    document.getElementById("new_address").value = "";
    
    window.alert("Contact added successfully");
}
