let insert1 = document.getElementById("store1");
let insert2 = document.getElementById("store2");
let insert3 = document.getElementById("store3");
let c1 = 0;
let c2 = 0;
function func1() {
    alert("1");
}
function func1() {
    let AccNumber = document.getElementById("AccNumber").value;
    let Pin = document.getElementById("Pin").value;
    let reg1 = /[0-9]{12}$/;
    let reg2 = /[0-9]/
    if (AccNumber.length === 12 && reg1.test(AccNumber)) {
        displayError1("", "");
        c1 = 1;
    }
    else {
        displayError1("Please Enter Valid Account Number", 'red');
        c1 = 0;
    }
    if (reg2.test(Pin) && Pin.length >= 4) {
        displayError2("", "");
        c2 = 1;
    }
    else {
        displayError2("Please Enter Valid Pin Number", 'red');
        c2 = 0;
    }
    if (c1 === 1 && c2 === 1) {
        insert3.innerHTML = "Success!Now DoubleClick to login!";
        insert3.style.backgroundColor = 'green';
        insert3.style.color = '#fff';
    }
    else {
        insert3.innerHTML = "";
    }
}
function displayError1(mesg, color) {
    insert1.innerHTML = mesg;
    insert1.style.color = color;
}
function displayError2(mesg, color) {
    insert2.innerHTML = mesg;
    insert2.style.color = color;
}
function func2() {
    if (c1 == 1 && c2 == 1) {
        let cont = document.getElementById("cont");
        let btn = document.getElementById("btn");
        let a = document.createElement("a");
        a.setAttribute("href", "./loginProcess.html")
        a.appendChild(btn);
        cont.appendChild(a);
    }
    else {
        insert3.innerHTML = "";
        a.removeAttribute("href");
    }
}
let balance = 0;

//deposit
function displayDeposit() {
    let input1 = parseInt(document.getElementById("amount").value);
    let display = document.getElementById("display");
    if (input1 >= 1) {
        if (input1 <= 20000) {
            balance += input1;
            display1(`${balance} Amount deposited Successfully!`, "green");
            document.getElementById("amount").value = "";
        }
        else {
            display1("Cant Deposit More than 20000, Please visit nearest Bank!", "red");

        }
    }
    else {
        display1("Please Enter Valid Amount!", "red")

    }
}
//withdraw
function displayWithdraw() {
    let input1 = parseInt(document.getElementById("amount").value);
    let display = document.getElementById("display");
    if (input1 && input1 > 1) {
        if (input1 > 1 && input1 <= 20000) {
            if (input1 < balance) {
                balance -= input1;
                display1(`${input1} Amount Withdraw Successfully`, "green");
                document.getElementById("amount").value = "";
            }
            else {
                display1("The Balance Is Very Low!", "red")
            }

        }
        else {
            display1("Can't Withdraw Morethan 20000..Please Visit Nearest Bank!", "red")
        }
    }
    else {
        display1("Please Enter Valid Amount!", "red");
    }
}
//balance enquiry
function displayBalance() {
    let display = document.getElementById("display");
    let bal = `The Balance Amount Is ${balance}`;
    display1(bal, "green");
    document.getElementById("amount").value = "";
}
function display1(input, color) {
    display.innerHTML = input;
    display.style.backgroundColor = color;

}



