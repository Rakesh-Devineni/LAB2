function mySubmitFunction() {
    var typeNode = document.getElementById("operations");
    var value1 = document.getElementById("num1");
    var value2 = document.getElementById("num2");
    var operationType = typeNode.value;


    if (value1.value === null || value1.value === "" || value2.value === "" || value2.value === null) {
        var x =
            "Please enter a valid input"
        document.getElementById("error").innerHTML = x
    } else {
        document.getElementById("error").innerHTML = ""
        const num1 = parseInt(value1.value);
        const num2 = parseInt(value2.value);
        var value;
        switch (operationType) {
            case "0":
                const sum = num1 + num2;
                value = `Addition of the two numbers is ${sum}`;
                break;
            case "1":
                const sub = num1 - num2;
                value = `Subtraction of the two numbers is ${sub}`;
                break;
            case "2":
                const mul = num1 * num2;
                value = `Multiplication of the two numbers is ${mul}`;
                break;
            case "3":
                const div = num1 / num2;
                value = `Division of the two numbers is ${div}`;
        }
        document.getElementById("success").innerHTML = value
    }


}

