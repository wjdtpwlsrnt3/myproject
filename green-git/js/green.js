let main_banner_Img = [
    "https://cimgcdn.ybtour.co.kr//attachHome/MN/BN/202209/202209021115180001104009001002.jpg",
    "https://cimgcdn.ybtour.co.kr//attachHome/MN/BN/202209/202209011106537021102001001065.jpg",
    "https://cimgcdn.ybtour.co.kr//attachHome/MN/BN/202209/202209141431244431410003001059.jpg",
    "https://cimgcdn.ybtour.co.kr//attachHome/MN/BN/202208/202208220940425151410002001034.jpg",
    "https://cimgcdn.ybtour.co.kr//attachHome/MN/BN/202209/202209011549004281410003001035.jpg"
]

let cnt = 0;
function chage_banner_Img() {
    document.querySelector('#main_banner_Img').setAttribute('src', main_banner_Img[cnt]);
    cnt = cnt + 1;
    if (cnt == 5) {
        cnt = 0;
    };
}
setInterval(chage_banner_Img, 2700);