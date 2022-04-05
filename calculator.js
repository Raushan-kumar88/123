function off()
    {
        document.getElementById('one').disabled=true;
        document.getElementById('two').disabled=true;
        document.getElementById('ans').disabled=true;
        document.getElementById('1').disabled=true;
        document.getElementById('2').disabled=true;
        document.getElementById('3').disabled=true;
        document.getElementById('4').disabled=true;
        document.getElementById('5').disabled=true;
        document.getElementById('6').disabled=true;
        document.getElementById('7').disabled=true;
        document.getElementById('8').disabled=true;
        document.getElementById('9').disabled=true;
        document.getElementById('0').disabled=true;
        document.getElementById('.').disabled=true;
        document.getElementById('-').disabled=true;
        document.getElementById('+').disabled=true;
        document.getElementById('*').disabled=true;
        document.getElementById('/').disabled=true;
        document.getElementById('%').disabled=true;
        document.getElementById('Cr').disabled=true;
        document.getElementById('=').disabled=true;
        document.getElementById('off').disabled=true;

    }
    function On()
    {
        document.getElementById('one').disabled=false;
        document.getElementById('two').disabled=false;
        document.getElementById('ans').disabled=false;
        document.getElementById('1').disabled=false;
        document.getElementById('2').disabled=false;
        document.getElementById('3').disabled=false;
        document.getElementById('4').disabled=false;
        document.getElementById('5').disabled=false;
        document.getElementById('6').disabled=false;
        document.getElementById('7').disabled=false;
        document.getElementById('8').disabled=false;
        document.getElementById('9').disabled=false;
        document.getElementById('0').disabled=false;
        document.getElementById('.').disabled=false;
        document.getElementById('-').disabled=false;
        document.getElementById('+').disabled=false;
        document.getElementById('*').disabled=false;
        document.getElementById('/').disabled=false;
        document.getElementById('%').disabled=false;
        document.getElementById('Cr').disabled=false;
        document.getElementById('=').disabled=false;
        document.getElementById('off').disabled=false;

    }
    function onee()
    {
        document.getElementById('one').value="1";
    }
    // for addition
    function add()
    {
       var a= parseInt(document.getElementById('one').value);
       var b= parseInt(document.getElementById('two').value);
       var c=a+b;
       document.getElementById('ans').value=c;
    }
    function sub()
    {
       var a= parseInt(document.getElementById('one').value);
       var b= parseInt(document.getElementById('two').value);
       var c=a-b;
       document.getElementById('ans').value=c;
    }
    function mult()
    {
       var a= parseInt(document.getElementById('one').value);
       var b= parseInt(document.getElementById('two').value);
       var c=a*b;
       document.getElementById('ans').value=c;
    }
    function div()
    {
       var a= parseInt(document.getElementById('one').value);
       var b= parseInt(document.getElementById('two').value);
       var c=a/b;
       document.getElementById('ans').value=c;
    }
    function mod()
    {
       var a= parseInt(document.getElementById('one').value);
       var b= parseInt(document.getElementById('two').value);
       var c=a%b;
       document.getElementById('ans').value=c;
    }