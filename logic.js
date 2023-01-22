
function myFunction(){
    const a=Math.floor(Math.random()*16777215).toString(16);
    const b=Math.floor(Math.random()*16777215).toString(16);
    const c=Math.floor(Math.random()*16777215).toString(16);
    const d=Math.floor(Math.random()*16777215).toString(16);
    const e=Math.floor(Math.random()*16777215).toString(16);
    const f=Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("one").style.backgroundColor="#"+a;
    document.getElementById("two").style.backgroundColor="#"+b;
    document.getElementById("three").style.backgroundColor="#"+c;
    document.getElementById("four").style.backgroundColor="#"+d;
    document.getElementById("five").style.backgroundColor="#"+e;
    document.getElementById("six").style.backgroundColor="#"+f;
}