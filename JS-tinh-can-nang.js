function kiem_tra() {
    let can_nang = document.getElementById('can_nang').value;
    let chieu_cao = document.getElementById('chieu_cao').value;
    let bmi = can_nang / ((chieu_cao)^2)
    let ketqua = "";

    if (bmi < 16)
        ketqua = "Bạn gầy value, đớp nhiều vào nhé"
    else if (bmi < 18)
        ketqua = "Gầy quá, ăn nhìu vào"
    else if (bmi < 19)
        ketqua = "Hơi gầy"
    else if (bmi < 25)
        ketqua = "Bình thường"
    else if (bmi < 30)
        ketqua = "Thừa cân"
    else if (bmi < 35)
        ketqua = "Giảm cân chút đê"
    else if (bmi < 40)
        ketqua = "Cảnh báo béo phì"
    else
        ketqua = "Bạn béo value, giảm cân giảm cân !!!"
    document.getElementById("ketqua").innerHTML = "Chỉ số Bmi là: " + bmi +  "<b>" + ketqua + "</b>";
}
