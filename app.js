// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// let soThuNhat =Number(prompt("nhập vào số a"))
// let soThuHai=Number(prompt("nhập vào số b"))
// if (soThuNhat % soThuHai===0){
//     alert("a chia hết cho b")
// }else {
//     alert("a không chia hết cho b")
// }

// bài 2Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let soTuoi= Number(prompt("nhập vào số tuổi"))
// Number.isInteger(soTuoi)
// if (soTuoi>0 && soTuoi<16){
//     alert("bạn chưa đủ tuổi vào lớp 10")
// }else  if (soTuoi>=16 && soTuoi<=20){
//     alert("bạn đủ tuổi vào lớp 10")
// }else {
//     alert("bạn không đủ điều kiện xét tuyển")
// }


// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là
// lớn hay nhỏ hơn 0

// let a =Number(prompt("nhập 1 số nguyên bất kì"));
// if (a>0){
//     alert("số bạn nhập lớn hơn 0")
// }else if (a===0){
//     alert("số bạn nhập là số 0")
// }else {
//     alert("số bạn nhập bé hơn 0")
// }

// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a =Number(prompt("nhập số nguyên a"))
// let b =Number(prompt("nhập số nguyên b"))
// let c =Number(prompt("nhập số nguyên c"))
// if (a>b &&a>c){
//     alert("a là số lớn nhất")
//
// }else if (b>a&&b>c){
//     alert("b l số lớn nhất")
// }else if (c>a&&c>b){
//     alert("c là số lớn nhất")
// }
// else {
//         alert("3 số bằng nhau")
//     }

// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi
// cuối kỳ
// let diemKiemTra=Number(prompt("nhập vào điểm kiểm tra"))
// let diemGiuaKi=Number(prompt("nhập vào điểm kiểm tra giữa kì"))
// let diemCuoiKi=Number(prompt("nhập vào điểm kiểm tra cuối kì"))
// let diemTrungBinh=(diemCuoiKi+diemGiuaKi+diemKiemTra)/3;
// if (diemTrungBinh>=8){
//     alert("bạn là học sinh giỏi")
// }else if (diemTrungBinh>=6.5 &&diemTrungBinh<8){
//     alert("bạn là học sinh khá")
// }else if (diemTrungBinh>= 5 &&diemTrungBinh<6.5){
//     alert("bạn là học sinh trung bình")
// }else {
//     alert("bạn là học sinh yếu")
// }


// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// let doanhSo=Number(prompt("nhập vào doanh số bán hàng"))
// let doanhThu;
// if (doanhSo>0&&doanhSo<100000){//doanh số x1000
//     doanhThu=doanhSo*0.01
//     alert("doanh thu là :"+doanhThu)
// }else if (doanhSo>=100000 && doanhSo<300000){
//     doanhThu=doanhSo*0.02
//     alert("doanh thu là :"+doanhThu)
// }else if (doanhSo>=300000&& doanhSo<500000) {
//     doanhThu = doanhSo * 0.03
//     alert("doanh thu là :"+doanhThu)
// }else if (doanhSo>=500000) {
//     doanhThu=doanhSo*0.04
//     alert("doanh thu là :"+doanhThu)
// }else {
//     alert("bạn ko có doanh thu")
// }


// Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho

let soPhutGoi =Number(prompt("nhập vào số phút gọi"))
let cuocGoi;
let bac1=1000;
let bac2=900;
let bac3=800;
let bac4=700
if (soPhutGoi>0&&soPhutGoi<=50){
    cuocGoi=soPhutGoi*bac1
    alert("số tiền cước của bạn là :"+cuocGoi)
}else if (soPhutGoi<=150){
    cuocGoi=((50*bac1)+(soPhutGoi-50)*900);
    alert("số tiền cước của bạn là :"+cuocGoi)
}else if (soPhutGoi<=350){
    cuocGoi=((50*bac1)+(100*bac2)+(soPhutGoi-150)*800)
    alert("số tiền cước của bạn là :"+cuocGoi)
}else if (soPhutGoi>350) {
    cuocGoi=((50*bac1)+(100*bac2)+(200*bac3)+(soPhutGoi-350)*700)
    alert("số tiền cước của bạn là :"+cuocGoi)
}