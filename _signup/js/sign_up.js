let uid = document.querySelector("#uid");
let pw = document.querySelector("#pw");
let cpw = document.querySelector("#cpw");
let name = document.querySelector("#name");
let addr = document.querySelector("#addr");
let birth = document.querySelector("#birth");
let gender = document.querySelector("#gender");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");

function postcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            document.querySelector("#addr").value = data["address"];
            document.querySelector("#addrs").style.display = "none";
        }
    }).open();
}

function getData() {
    if (chkpw()) { } else {
        alert("잘못된 비밀번호입니다.")
        pw.focus();
        return false;
    }

    if (chkcpw()) { } else {
        alert("비밀번호가 일치하지 않습니다.")
        cpw.focus();
        return false;
    }

    if (chkname()) { } else {
        alert("잘못된 이름입니다.")
        name.focus();
        return false;
    }

    if (chkaddr()) { } else {
        alert("잘못된 주소입니다.")
        addr.focus();
        return false;
    }

    if (chkbirth()) { } else {
        alert("잘못된 생일입니다.")
        birth.focus();
        return false;
    }

    if (chkemail()) { } else {
        alert("잘못된 이메일입니다.")
        email.focus();
        return false;
    }
}

function chkpw() {
    var pwRE = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (pwRE.test(pw.value)) {
        document.querySelector("#pws").style.display = "none";
        return true;
    } else {
        document.querySelector("#pws").style.display = "block";
        return false;
    }
}

function chkcpw() {
    if (pw.value == cpw.value) {
        if (cpw.value == "") {
            document.querySelector("#pwsblank").style.display = "block";
            return false;
        } else {
            document.querySelector("#pwsblank").style.display = "none";
            document.querySelector("#pwschk").style.display = "none";
            return true;
        }

    } else {
        if (cpw.value != "") {
            document.querySelector("#pwsblank").style.display = "none";
            document.querySelector("#pwschk").style.display = "block";
            return false;
        } else {
            document.querySelector("#pwsblank").style.display = "block";
            document.querySelector("#pwschk").style.display = "none";
            return false;
        }
    }
}

function chkname() {
    var reg = /^[가-힣]{2,10}$/;
    if (reg.test(name.value)) {
        document.querySelector("#names").style.display = "none";
        return true;
    } else {
        document.querySelector("#names").style.display = "block";
        return false;
    }
}

function chkaddr() {
    if (addr.value) {
        document.querySelector("#addrs").style.display = "none";
        return true;
    } else {
        document.querySelector("#addrs").style.display = "block";
        return false;
    }
}

function chkbirth() {
    var birthRE = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
    if (birthRE.test(birth.value)) {
        document.querySelector("#births").style.display = "none";
        return true;
    } else {
        document.querySelector("#births").style.display = "block";
        return false;
    }
}

function chkemail() {
    var emailRE = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRE.test(email.value)) {
        document.querySelector("#emails").style.display = "none";
    } else {
        document.querySelector("#emails").style.display = "block";
        return false;
    }
}

let userId = document.querySelector("#uid");
let hit = document.querySelector("#uidr");
let timer = null;

userId.focus();

userId.addEventListener("keyup", function (e) {
    clearTimeout(timer);
    timer = setTimeout(chkId, 1000, this.value);
});

function chkId(val) {
    var idRE = /^[a-zA-z0-9]{5,20}$/;
    if (val.length === 0) {
        hit.innerHTML = "";
        return false;
    } else {
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == this.DONE) {
                if (JSON.parse(http.response)['result'] == 'y' || idRE.test(uid.value) == 0) {
                    hit.style.color = "red";
                    hit.innerHTML = "사용할 수 없는 아이디입니다."
                    userId.value = "";
                } else {
                    hit.style.color = "green";
                    hit.innerHTML = "사용 가능한 아이디입니다."
                    inputBlank()
                }
            }
        }
        http.open("GET", "repeat_id.php?repeat=" + val, true);
        http.send();
    }
}

var ph = document.querySelector("#phone");
var phone_check = document.querySelector("#phone_check");
ph.addEventListener("keyup", function(e) {
    clearTimeout(timer);
    timer = setTimeout(fn_submit, 900, this.value);
});
function fn_submit() {
    var regPhone = /^([0-9]{3,4})-?([0-9]{4})$/;
    if (regPhone.test(ph.value) === true) {
        phone_check.style.color = "green";
        phone_check.innerHTML = "입력된 값은 휴대전화번호입니다.";
    }else{
        phone_check.style.color = "red";
        phone_check.innerHTML = "입력된 값은 휴대전화번호가 아닙니다.";
        ph.value = "";
    }
}