$("form").on("click", "button", async function (event) {
    event.preventDefault();

    let fname = $("#firstName").val();
    let lname = $("#lastName").val();
    let email = $("#email").val();

    const resp = await axios.post('http://localhost:3000/users', {
        firstName: fname,
        lastName: lname,
        email: email
    })

    $(`<h3 class='signUpMessage'>Sign Up Successful, ${resp.data.firstName}!</h3>`).css('color', 'blue').appendTo('form')

    $("#firstName").val('');
    $("#lastName").val('');
    $("#email").val('');
}
);
