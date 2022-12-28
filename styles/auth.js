let users = [
    {
        "login": "admin",
        "password": "12345",
        "role": "admin",
        "salary": "10000₽",
        "info": "+99999999",
        "date": "27.12.2000",
        "full_name": "Джон Смит Сталинославович",
        "avatar": "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
        "login": "buh",
        "password": "123",
        "role": "buh",
        "salary": "3000₽",
        "info": "+99999999",
        "date": "06.06.2007",
        "full_name": "Егор Скородумов Эдуардович",
        "avatar": "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
        "login": "cred",
        "password": "123456",
        "role": "cred",
        "salary": "5000₽",
        "info": "+99999999",
        "date": "15.07.2005",
        "full_name": "Анджелина Джоли Евгеньева",
        "avatar": "https://www.w3schools.com/howto/img_avatar2.png",
    },
]

let filials = [
    {
        "name": "Филиал ”Зелинского”",
        "phone": "+7 911 650 93 75",
        "addres": "630005, Новосибирская область, г. Новосибирск, ул. Зелинского, д. 36",
        "date": "пн-пт: 10:00-19:00",
    },
    {
        "name": "Филиал ”Зелинского”",
        "phone": "+7 911 650 93 75",
        "addres": "630005, Новосибирская область, г. Новосибирск, ул. Зелинского, д. 36",
        "date": "пн-пт: 10:00-19:00",
    },
    {
        "name": "Филиал ”Зелинского”",
        "phone": "+7 911 650 93 75",
        "addres": "630005, Новосибирская область, г. Новосибирск, ул. Зелинского, д. 36",
        "date": "пн-пт: 10:00-19:00",
    },
]

$(document).ready(function () {
    if (localStorage.getItem("role")) {
        $("body").removeClass("login")
        $("body").addClass(localStorage.getItem("role"))
    }
})

$(".login-form").validate({
    submitHandler: function (form) {
        $(".login-form").validate()
        let username = $("#username").val()
        let password = $("#password").val()
        let role = ""
        for (let i = 0; i < 3; i++) {
            if (users[i]["login"] == username && users[i]["password"] == password) {
                role = users[i]["role"]
                localStorage.setItem("role", role)
            }
        }
        if (!role) {
            alert("Данные не верны")
        }
        else {
            $("body").removeClass("login")
            $("body").addClass(role)
        }

    }
})

$(".postcred-form").validate({
    submitHandler: function (form) {
        console.log("postcred-form")
    }
})

$(".autocred-form").validate({
    submitHandler: function (form) {
        console.log("autocred-form")
    }
})

function exitButton() {
    $("body").removeClass()
    $("body").addClass("login")
    $(".login-form").trigger("reset")
    localStorage.clear()
}

function createEmployeeCards() {
    users.forEach(function (item) {
        let fullName = item["full_name"]
        let salary = item["salary"]
        let info = item["info"]
        let login = item["login"]
        let password = item["password"]
        let date = item["date"]
        let avatar = item["avatar"]
        let HTMLBlock = `
            <div class="col col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${avatar}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">${fullName}</h5>
                        <p class="card-text">${login}:${password}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Зарплата: ${salary}</li>
                        <li class="list-group-item">Телефон: ${info}</li>
                        <li class="list-group-item">${date}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Уволить</a>
                    </div>
                </div>
            </div>
        `

        $(".table-stuff-wrapper").append(HTMLBlock)

    })
}
createEmployeeCards()
function createAdminTable() {
    for (i = 0; i < filials.length; i++) {
        let name = filials[i]["name"]
        let phone = filials[i]["phone"]
        let addres = filials[i]["addres"]
        let date2 = filials[i]["date"]
        let htmlblock2 = `
        <tr>
            <th scope="row">${i+1}</th>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${addres}</td>
            <td>${date2}</td>
        </tr>
        `
        $("#admin-table-filials").append(htmlblock2)
    }
}
createAdminTable()

$("#cred-select").on("change", function () {
    let selected = $(this).find(":selected").val()
    let $autoCredForm = $(".autocred-form")
    let $postCredForm = $(".postcred-form")
    $autoCredForm.trigger("reset")
    $postCredForm.trigger("reset")
    switch (selected) {
        case "3":
        case "1":
            $postCredForm.show()
            $autoCredForm.hide()
            break;
        case "2":
            $postCredForm.hide()
            $autoCredForm.show()
            break;
        default:
            $autoCredForm.hide()
            $postCredForm.hide()
    }
})

