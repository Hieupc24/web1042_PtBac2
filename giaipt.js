function choso() {
    var amduong1 = Math.random() < 0.4 ? -1 : 1;
    var a = Math.round(Math.random() * 10 * amduong1);
    var amduong2 = Math.random() < 0.4 ? -1 : 1;
    var b = Math.round(Math.random() * 10 * amduong2);
    var amduong3 = Math.random() < 0.4 ? -1 : 1;
    var c = Math.round(Math.random() * 10 * amduong3);

    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;

    var str = 'Phương trình: ';
    if (a == 0) {
        if (b != 0 && c != 0) {
            str += b + "x" + "+" + c + " =0";
        }

        if (b != 0 && c == 0) {
            str += b + "x" + "=0"
        }
        if (b == 0) {
            str += c + "=0";
        }
    } else {
        if (a == -1) str += "-x<sup>2</sup>";
        else if (a == 1) str += "x<sup>2</sup>";
        else str += a + "x<sup>2</sup>";

        if (b == 0) {
            if (c != 0) {
                if (c < 0) {
                    str += "-" + Math.abs(c) + " =0";
                }
                if (c > 0) {
                    str += "+" + Math.abs(c) + " =0";
                }
            } else {
                str += " =0"
            }
        } else {
            if (b > 0) {
                if (b == 1) {
                    str += "+x";
                } else {
                    str += "+" + Math.abs(b) + "x";
                }
            }
            if (b < 0) {
                if (b == -1) {
                    str += "-x";
                } else {
                    str += "-" + Math.abs(b) + "x";
                }
            }
            if (c == 0) {
                str += " =0";
            } else {
                if (c < 0) {
                    str += "-" + Math.abs(c) + " =0";
                }
                if (c > 0) {
                    str += "+" + Math.abs(c) + " =0";
                }
            }
        }
    }
    document.getElementById('pt').innerHTML = str;

    var btn = document.getElementById("btngiai");
    btn.disabled = false;
    btn.style.backgroundColor = darkblue;
}
function nhapso() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    var str = 'Phương trình: ';
    if (a == 0) {
        if (b != 0 && c != 0) {
            str += b + "x" + "+" + c + " =0";
        }

        if (b != 0 && c == 0) {
            str += b + "x" + "=0"
        }
        if (b == 0) {
            str += c + "=0";
        }
    } else {
        if (a == -1) str += "-x<sup>2</sup>";
        else if (a == 1) str += "x<sup>2</sup>";
        else str += a + "x<sup>2</sup>";

        if (b == 0) {
            if (c != 0) {
                if (c < 0) {
                    str += "-" + Math.abs(c) + " =0";
                }
                if (c > 0) {
                    str += "+" + Math.abs(c) + " =0";
                }
            } else {
                str += " =0"
            }
        } else {
            if (b > 0) {
                if (b == 1) {
                    str += "+x";
                } else {
                    str += "+" + Math.abs(b) + "x";
                }
            }
            if (b < 0) {
                if (b == -1) {
                    str += "-x";
                } else {
                    str += "-" + Math.abs(b) + "x";
                }
            }
            if (c == 0) {
                str += " =0";
            } else {
                if (c < 0) {
                    str += "-" + Math.abs(c) + " =0";
                }
                if (c > 0) {
                    str += "+" + Math.abs(c) + " =0";
                }
            }
        }
    }
    document.getElementById('pt').innerHTML = str;

    var btn = document.getElementById("btngiai");
    btn.disabled = false;
    btn.style.backgroundColor = darkblue;

}

//hàm giải phương trình
function gptb2() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    var slg = Number(document.getElementById("solangiai").innerHTML);
    slg = slg + 1;
    document.getElementById("solangiai").innerHTML = slg;

    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById("kq").innerHTML = "<p>Phương trình bậc 1</p>Vô số nghiệm!";

            } else {
                document.getElementById("kq").innerHTML = "<p>Phương trình bậc 1</p>Vô nghiệm!";

            }
        } else {
            var x = -c / b;
            var str = `<p>Phương trình có nghiệm: x= ${x.toFixed(2)} </p>`
            document.getElementById("kq").innerHTML = str;
        }
    } else {
        //Giải phương Trình bậc 2
        var datel = b * b - 4 * a * c;
        if (datel < 0) {
            document.getElementById("kq").innerHTML = "<p>Phương trình vô nghiệm!</p>";
        } else if (datel == 0) {
            var x0 = (-b / (2 * a));
            var kq = `<p>Phương trình có nghiệm kép!</p>
                   x<sub>1</sub>=x<sub>2</sub>= ${x0.toFixed(2)}`
            document.getElementById("kq").innerHTML = kq;
        } else {
            var x1 = (-b - Math.sqrt(datel)) / (2 * a);
            var x2 = (-b + Math.sqrt(datel)) / (2 * a);
            var ketqua = `<p>Phương trình có 2 nghiệm phân biệt!</p>
                        X<sub>1</sub>= ${x1.toFixed(2)} <br>
                        X<sub>2</sub>= ${x2.toFixed(2)}
                        `
            document.getElementById("kq").innerHTML = ketqua;

        }
    }
    var btn = document.getElementById("btngiai");
    btn.disabled = true;
}
//Hàm lấy ngày giờ
function datetime() {
    var x = new Date();
    var ngay = x.getDate();
    var thang = x.getMonth() + 1;
    var nam = x.getFullYear();
    var gio = x.getHours();
    var phut = x.getMinutes();
    var giay = x.getSeconds();

    var str = `Bây giờ là ${ngay}/${thang}/${nam} ${gio}:${phut}:${giay}`
    document.getElementById("ngaygio").innerHTML = str;
}
setInterval("datetime()", 1000);