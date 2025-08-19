function perc1() {
 a = document.form1.a.value/100;
 b = a*document.form1.b.value;
 document.form1.total1.value = b
 }
function perc2() {
 a = document.form1.c.value;
 b = document.form1.d.value;
 c = a/b;
 d = c*100;
 document.form1.total2.value = d
 }
 
     function sumTotal() {
        let val = document.getElementsByName("novat")[0].value;
        let sum = Number(val);
        document.getElementsByName("sum")[0].value = sum;
        vatCalc(sum);
    }
    function sumnovat() {
        let val = document.getElementsByName("vat")[0].value;
        let sum = Number(val);
        document.getElementsByName("sum")[0].value = sum;
        novatCalc(sum);
    }
    function vatCalc (sum) {
        var sumVat =1.17;
         let vat = sumVat*sum;
         document.getElementsByName("vat")[0].value = vat;
}
    function novatCalc (sum) {
        var sumVat =1.17;
         let novat = sum/sumVat;
         document.getElementsByName("novat")[0].value = novat;
}