document.getElementById("submitButton").addEventListener('click', function () {
    var length1 = document.getElementById("emailSubject").value.length;
    if (length1 == 0) {
        console.log("The field is empty")
    } else {
        var subject1 = document.getElementById("emailSubject").value;
        var name1 = document.getElementById("usersEmail").value;
        var message1 = document.getElementById("message").value;
        console.log(subject1, name1, message1);
    }
});