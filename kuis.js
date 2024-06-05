const datasoal = [{
    soal: "Manakah dari berikut ini yang bukan merupakan teknologi inti yang digunakan dalam pengembangan web?",
    a: "Java",
    b: "CSS",
    c: "HTML",
    d: "JavaScript",
    e: "HTTP",
    f: "HTTPS",
    correct: "a",
},
{
    soal: "Properti CSS apa yang digunakan untuk mengatur warna latar belakang elemen?",
    a: "background",
    b: "background-color",
    c: "style",
    d: "bgcolor",
    e: "warna-bg",
    f: "bg-color",
    correct: "b",
},
{
    soal: "Properti CSS apa yang digunakan untuk mengatur ukuran font elemen?",
    a: "font",
    b: "size",
    c: "font-size",
    d: "text-size",
    e: "ukuran",
    f: "pon-ukuran",
    correct: "c",
},
{
    soal: "Tag HTML apa yang biasanya digunakan untuk mendefinisikan judul utama halaman web?",
    a: "<h4>",
    b: "<h5>",
    c: "<h3>",
    d: "<h1>",
    e: "<h6>",
    f: "<h9>",
    correct: "d",
},
{
    soal: "Apa kegunaan utama dari 'font-size' pada properti CSS",
    a: "Mengatur keuangan",
    b: "Mengatur jarak element",
    c: "Mengubah warna background",
    d: "Mengubah bentuk font",
    e: "Mengubah ukuran font",
    f: "Mengubah warna font",
    correct: "e",
},
{
    soal: "Apa fungsi dari 'background-color' pada properti CSS?",
    a: "Merubah warna font",
    b: "Mengubah ukuran pada website",
    c: "Mengatur jarak element",
    d: "Mengatur ukuran element",
    e: "Mengubah bentuk background",
    f: "Mengubah warna background",
    correct: "f",
}
];

const kuis = document.getElementById("kuis");
const hitungsoal = document.getElementById("hitung-pertanyaan");
const totalnomer = document.getElementById("total-nomer");
const nomersoal = document.getElementById("nomer-soal");
const soal = document.getElementById("soal");
const jawabanlabel = document.querySelectorAll(".jawaban-label");
const tombollanjut = document.getElementById("selanjutnya");
const semuainput = document.querySelectorAll("input[type='radio']")
const tombolkirim = document.getElementById("kirim");
const hasil = document.getElementById("hasil")
const nilai = document.getElementById("nilai");

let nilaisekarang = 0;
let jawaban = 0;

const ambilarraysoal = ()=>{
    hitungsoal.innerHTML = `${nilaisekarang + 1}`;
    totalnomer.innerHTML = datasoal.length;
    nomersoal.innerHTML = `${nilaisekarang + 1}`;
    soal.innerHTML = datasoal[nilaisekarang].soal;
    jawabanlabel[0].innerHTML = datasoal[nilaisekarang].a;
    jawabanlabel[1].innerHTML = datasoal[nilaisekarang].b;
    jawabanlabel[2].innerHTML = datasoal[nilaisekarang].c;
    jawabanlabel[3].innerHTML = datasoal[nilaisekarang].d;
    jawabanlabel[4].innerHTML = datasoal[nilaisekarang].e;
    jawabanlabel[5].innerHTML = datasoal[nilaisekarang].f;

    reset();
}
const reset = ()=>{
    semuainput.forEach((semuainput)=>{
        semuainput.checked = false;
    });
};
tombollanjut.addEventListener("click",()=>{
    let answer = getSelection();
    if(answer){
        if(answer === datasoal[nilaisekarang].correct){
            jawaban++;
        }
        nilaisekarang++;
        if(nilaisekarang < datasoal.length){
            ambilarraysoal();
        }
    }
});
tombolkirim.addEventListener("click",()=>{
    let answer = getSelected();
    if(answer){
        if(answer === datasoal[nilaisekarang].correct){
            answer++;
        };
        nilaisekarang++;
        if(getSelected()){
            soal.style.display = "none";
            hasil.style.display = "block";
            nilai.innerHTML = `Skor anda adalah ${jawaban}/${datasoal.length}`;
        }
    }
});
const getSelection = ()=>{
    let jawaban;
    semuainput.forEach((semuainput)=>{
        if(semuainput.checked){
            jawaban = semuainput.value;
        }
    });
    return jawaban;
}
ambilarraysoal();

