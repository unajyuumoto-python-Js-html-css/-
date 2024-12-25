//注意　インデントないし汚すぎるだろ！！！！！！　あと変数の名前なんだよ！あと15行目のid:tententenwってふざけすぎだろ！！！！

//ドキュメント定義したい団地

let moji = document.querySelector("#moji")

let KeName = document.querySelector("#keisanname")

let kakezan1 = document.querySelector("#kake1")

let kakezan2 = document.querySelector("#kake2")

let kBtn = document.querySelector("#kBtn")

let keisannaiyou = document.querySelector("#tententenw")

let kakeB = document.querySelector("#K")

let hikiB = document.querySelector("#H")

let tasuB = document.querySelector("#T")

let waruB = document.querySelector("#W")

//イベント定義ちょっと長くて墾田永年私財法

kakeB.addEventListener("click",kake)

hikiB.addEventListener("click",hiki)

tasuB.addEventListener("click",tasu)

waruB.addEventListener("click",waru)

kBtn.addEventListener("click",keisan)

//バグストッパー!?

keisanmode = ""

//これは若干ながいから日本国憲法()

moji.setAttribute("class","kuro")

//計算する時の関数。計算ボタンを押したとき反応

function keisan(){

suuji1 = parseInt(kakezan1.value)    
suuji2 = parseInt(kakezan2.value)
switch (keisanmode){
    case "*":
        kekka = suuji1 * suuji2
    break;
    case "+":
        kekka = suuji1 + suuji2
    break;
    case "-":
        kekka = suuji1 - suuji2
    break;
    case "/":
        kekka = suuji1 / suuji2
    break;
    default:
        kekka = "message1"
    break;
    
}

//この辺はhtmlに計算した値を表示してるところ　めっちゃ見づらい

if (isNaN(kekka)){
    if(kekka == "message1"){
moji.setAttribute("class","aka")
moji.textContent = "上の計算記号のボタンを押してください。無効な値が入力されています。"

 }else{

moji.setAttribute("class","aka")
moji.textContent = "無効な値が入力されています。" 

}


}else if(kekka == "message1"){

moji.textContent = "上の計算記号のボタンを押してください。"
moji.setAttribute("class","aka")
moji.textContent = kekkahyouji

}else if(suuji2 == 0 && keisanmode == "/"){

 let kekkahyouji = "ゼロでは除算できません。"
moji.setAttribute("class","aka")
moji.textContent = kekkahyouji

}else{

let kekkahyouji = "=" + kekka
moji.setAttribute("class","kuro")
moji.textContent = kekkahyouji

}

}

//ここでいちいちいちいち全四種のボタンのクラスを変えたり変えなかったり

function modeHenkou(){

    switch (naiyou){
        case "kake":
        kakeB.setAttribute("class","kake3 keisansyuBtn")
        hikiB.setAttribute("class","hiku keisansyuBtn")
        tasuB.setAttribute("class","tasu keisansyuBtn")
        waruB.setAttribute("class","waru keisansyuBtn")
        keisanmode = "*"
        break;
        case "hiki":
        kakeB.setAttribute("class","kake keisansyuBtn")
        hikiB.setAttribute("class","hiku3 keisansyuBtn")
        tasuB.setAttribute("class","tasu keisansyuBtn")
        waruB.setAttribute("class","waru keisansyuBtn")
        keisanmode = "-"
        break;
        case "tasu":
        kakeB.setAttribute("class","kake keisansyuBtn")
        hikiB.setAttribute("class","hiku keisansyuBtn")
        tasuB.setAttribute("class","tasu3 keisansyuBtn")
        waruB.setAttribute("class","waru keisansyuBtn")
        keisanmode = "+"
        break;
        case "waru":
        kakeB.setAttribute("class","kake keisansyuBtn")
        hikiB.setAttribute("class","hiku keisansyuBtn")
        tasuB.setAttribute("class","tasu keisansyuBtn")
        waruB.setAttribute("class","waru3 keisansyuBtn")
        keisanmode = "/"
        break;        
    
    
    }
}

//ここは計算記号のボタンが押されたとき最初に行われる関数　あとpythonやってるとコメントのやつが「#」だから「//」じゃないから混乱する()

function kake(){
    naiyou = "kake"
    modeHenkou()
    keisannaiyou.textContent = "×"
}
function tasu(){
    naiyou = "tasu"
    modeHenkou()
    keisannaiyou.textContent = "+"
}
function hiki(){
    naiyou = "hiki"
    modeHenkou()
    keisannaiyou.textContent = "-"
}
function waru(){
    naiyou = "waru"
    modeHenkou()
    keisannaiyou.textContent = "÷"
}