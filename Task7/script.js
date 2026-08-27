let input = document.querySelector("input");

let addButton = document.querySelector("button");

let list = document.querySelector("ol");

addButton.addEventListener("click", function () {

    if (input.value === "") {

        alert("Enter a task");

    } else {

        let li = document.createElement("li");

        li.innerText = input.value;

        let deleteButton = document.createElement("button");

        deleteButton.innerText = " Delete";

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener("click", function () {

            li.remove();

        });

        input.value = "";

    }

});