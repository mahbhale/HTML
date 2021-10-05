function GetData() {

    $(document).ready(function() {
        $.getJSON("cars.json", function(myObj) {
            myfun(myObj);

        }).fail(function() {
            console.log("An error has occurred.");
        });
    });
}

function myfun(myObj) {

    const table = document.getElementById('demo');
    const tbody = document.querySelector('tbody');
    let count = Object.keys(myObj.cars[0]).length;

    for (let i = 0; i <= count; i++) {

        const form = document.createElement('form');
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const tr1 = document.createElement('tr');
        const tr2 = document.createElement('tr');
        const div = document.createElement('div');
        td1 = document.createElement('td');
        // // td4 = document.createElement('td');
        // // td5 = document.createElement('td');
        // td6 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');

        td4 = document.createElement('td');
        td5 = document.createElement('td');
        td6 = document.createElement('td');

        td = document.createElement('td');
        let img = document.createElement("img");
        img.setAttribute("src", myObj.cars[i].image);

        td1.innerHTML = myObj.cars[i].Brand + "-" + myObj.cars[i].Model + "-" + myObj.cars[i].Modelyear;

        tr2.appendChild(td1);

        const tr3 = document.createElement('tr');
        td2.innerHTML = "<b>Fueltype-</b>" + myObj.cars[i].Fueltype;

        tr3.appendChild(td2);

        const tr4 = document.createElement('tr');
        td3.innerHTML = "<b>Seats-</b>" + myObj.cars[i].Seats;

        tr4.appendChild(td3);

        const tr5 = document.createElement('tr');
        td6.innerHTML = "<b>Priceperday-</b>" + myObj.cars[i].Priceperday;

        tr5.appendChild(td6);

        const tr6 = document.createElement('tr');
        td4.innerHTML = "<b>Availability-</b>" + myObj.cars[i].Availability;

        tr6.appendChild(td4);

        const tr7 = document.createElement('tr');
        td5.innerHTML = "<b>Description-</b>" + myObj.cars[i].Description;

        tr7.appendChild(td5);


        const tr8 = document.createElement('tr');

        const input = document.createElement('input');

        input.setAttribute("type", "button");
        input.setAttribute("class", "btn");
        input.setAttribute("name", "submit");
        input.setAttribute("value", "Add To Card");
        input.setAttribute("id", myObj.cars[i].id);
        input.onclick = function() { submit(input.getAttribute('id')); }; // for IE

        tr8.appendChild(input);

        td.setAttribute("colspan", "3");
        td1.setAttribute("colspan", "3");
        td4.setAttribute("colspan", "3");
        td5.setAttribute("colspan", "3");
        td3.setAttribute("colspan", "2");
        td2.setAttribute("colspan", "2");

        td.appendChild(img);
        tr1.appendChild(td);

        tbody.appendChild(tr1);
        tbody.appendChild(tr2);
        tbody.appendChild(tr3);
        tbody.appendChild(tr4);
        tbody.appendChild(tr5);
        tbody.appendChild(tr6);
        tbody.appendChild(tr7);
        tbody.appendChild(tr8);
        table.appendChild(tbody);
        div.setAttribute("id", "single_product");
        form.setAttribute("id", myObj.cars[i].id);
        form.setAttribute("Method", "POST");
        form.setAttribute("action", "card.html");
        div.appendChild(form);
        form.appendChild(table);
        document.getElementById("single_product").appendChild(div);
        console.log(table);

    }

}