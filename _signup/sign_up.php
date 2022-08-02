<!DOCTYPE html>

<head>
    <meta charset="EUC-KR">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/sign_up.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>회원가입</title>
</head>

<body>
    <div class="title">
        <h1>회원가입</h1>
    </div>

    <div class="">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <form action="sign_up_ok.php" method="POST">
                    <div class="input">
                        <label class="semi_title">아이디</label>
                        <label class="red_point">*</label>
                        <input name="id" id="uid" minlength="5" maxlength="20" class="form-control" type="text" placeholder="5~20자의 영문 소문자, 숫자와 특수문자(_),(-)" required>
                        <span id="uidr"></span>
                    </div>
                    <div class="input">
                        <label class="semi_title">비밀번호</label>
                        <label class="red_point">*</label>
                        <input required name="password" maxlength="16" id="pw" class="form-control" type="password" placeholder="8~16자 영문 대 소문자, 숫자, 특수문자" onkeyup="chkpw()">
                        <span id="pws" class="warning">
                            8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
                        </span>
                    </div>
                    <div class="input">
                        <label class="semi_title">비밀번호확인</label>
                        <label class="red_point">*</label>
                        <input required name="password_check" maxlength="10" id="cpw" class="form-control" type="password" onkeyup="chkcpw()">
                        <span id="pwschk" class="warning">
                            비밀번호가 일치하지 않습니다.
                        </span>
                        <span id="pwsblank" class="warning">
                            필수 정보 입니다.
                        </span>
                    </div>
                    <div class="input">
                        <label class="semi_title">이름</label>
                        <label class="red_point">*</label>
                        <input required name="name" id="name" class="form-control" type="text" placeholder="ex : 홍길동" onkeyup="chkname()">
                        <span id="names" class="warning">
                            잘못된 정보 입니다.
                        </span>
                    </div>
                    <div class="input">
                        <label class="semi_title">주소</label>
                        <label class="red_point">*</label>
                        <input required name="adress" class="form-control" type="text" id="addr" readonly onclick="postcode()">
                        <span id="addrs" class="warning">
                            필수 정보 입니다.
                        </span>
                    </div>
                    <div class="input">
                        <label class="semi_title">생년월일(8자리)</label>
                        <label class="red_point">*</label>
                        <input required name="birth" id="birth" class="form-control" type="text" maxlength="8" placeholder="ex) 1996년 12월 30일 = 19961230">
                        <span id="births" class="warning" onkeyup="chkbirth()">
                            필수 정보 입니다.
                        </span>
                    </div>
                    <div class="input">
                        <label class="semi_title">성별 (선택)</label>
                        <select name="gender" id="gender" class="form-select">
                            <option value="man">남자</option>
                            <option value="women">여자</option>
                            <option value="noselect" selected>선택안함</option>
                        </select>
                    </div>
                    <div class="input">
                        <label class="semi_title">이메일 (선택)</label>
                        <input name="email" id="email" class="form-control" type="text" placeholder="ex) wjdtpwlsrnt3@naver.com" onkeyup="chkemail()">
                        <span id="emails" class="warning">
                            필수 정보 입니다.
                        </span>
                    </div>
                    <div class="input">
                        <label id="phone_title">전화번호 (선택)</label>
                        <label id="front_number">010 -</label>
                        <input id="phone" name="phone" class="form-control" type="text" placeholder="뒷 자리 8자리를 '-'기호 없이 입력" minlength="8" maxlength="8" onkeyup="chkphone()">
                        <span id="phone_check"></span>
                    </div>
                    <div>
                        <button id="signup" class="btn btn-lg btn-primary" style="width: 100%;"> 가입하기</button>
                    </div>
                </form>
            </div>
            <div class="col"></div>
        </div>
</body>

</html>
<script src="./js/sign_up.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>