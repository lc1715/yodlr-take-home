async function getAllUsers() {
    let resp = await axios.get('http://localhost:3000/users')

    let userArr = resp.data

    userArr.map((user) => (
        $('ul').append(
            `<li class="list-group-item">
                <strong>Name:</strong> ${user.firstName} ${user.lastName}
            </li>

            <li class="list-group-item">
                <strong>Email:</strong> ${user.email}
            </li>

            <li class="list-group-item">
                <strong>State:</strong> ${user.state}
            </li>

            <br>`
        )
    ))
}

getAllUsers()
