<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

    <form>
        No vat:<input oninput="sumTotal()" type="number" name="novat"><br>
        VAT:<input oninput="sumnovat()" type="number" name="vat">
        <input type="hidden" name="sum">
    </form>

    <script>


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
    </script>

</body>
</html>