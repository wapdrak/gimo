<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<SCRIPT>

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
</SCRIPT>

<FORM name=form1 method="post">
<TABLE cellSpacing="1" cellPadding="1" border="1">
  <TBODY>
  <TR>
    <TD align="middle" colSpan="3"><B><FONT size="4">Percentage Calculator</FONT></B> 
      </TD>
  <TR>
    <TD>What is <INPUT oninput="perc1()" size="5" name="a"> % of <INPUT oninput="perc1()" size="5" name="b">?</TD>
    <TD>Answer: <INPUT maxLength="40" size="5" name="total1"></TD>
    <TD><INPUT onclick="perc1()" type="button" value="Calculate"></TD>
  <TR>
    <TD><INPUT oninput="perc2()" size="5" name="c"> is what percent of <INPUT oninput="perc2()" size="5" 
name="d">?</TD>
    <TD>Answer: <INPUT size="5" name="total2"> %</TD>
    <TD><INPUT onclick="perc2()" type="button" value="Calculate"></TD>
  <TR>
    <TD align="middle" 
colSpan="3"><INPUT type="reset" value="Reset"></TD></TR></TBODY></TABLE></FORM>

</body>
</html>