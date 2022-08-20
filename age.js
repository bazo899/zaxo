
function age()
{
var d=document.getElementById('day').value;
var m=document.getElementById('month').value;
var y=document.getElementById('year').value;
const date=new Date();
var roj=date.getDate();
var hayv=1+date.getMonth();
var sal=date.getFullYear();

var M=[31,28,31,30,31,30,31,31,30,31,30,31];//bahzad_krd
var e=hayv-1;

if(d>roj)
{
    roj=roj+M[hayv-1];
    hayv=hayv-1;
}
if(m>hayv)
{
    hayv=hayv+12;
    sal=sal-1;
}

var dod =roj-d;
var mo =hayv-m;
var so =sal-y;
//<!-- to de hnda rojen di bia jnda sal -->
var rojen=M[e]-dod;
var hayven=12-mo;
var salen=so+1;

var hev=(so*12)+mo;
//<!-- 7afti -->





//<!-- rojen gshti dbna -->
var rojan=(365.25*so)+dod+(mo*30.4375);
rojan=Math.floor(rojan)

//<!-- 7afti -->
var weak=rojan/7;
weak=Math.floor(weak);

var hour=rojan*24;
var minute=hour*60;
var second=minute*60;




if(d>=0&&d<=31 && m>=0&&m<=12 && y>=1000 && y<=2023 )
{
document.getElementById('res').innerHTML
=" ژیێ تە "+so+"<span class='sal'> سال</span>"+" و "+mo+"<span class='hayv'>  هەیڤ</span> و "+dod+"<span class='roj'>  روژی</span> <br>  "+
"توو دێ "+hayven+"<span class='hayv'>  هەیڤ و </span>"+rojen+" <span class='roj'>  رۆژێن دی بیە </span>"+salen +"<span class='sal'>  ساڵ</span>"+"<br>"
+"یان ژیێ تە "+hev+"<span class='hayv'>  هەیڤ و </span>"+dod+"<span class='roj'>  رۆژە</span>"+"<br>"
+"یان ژی ژیێ تە "+weak+" حەفتی و "+dod+"<span class='roj'>  رۆژن</span>"+"<br>"+"یان ژیێ تە "+rojan+"<span class='roj'>  رۆژن </span><br>"
+"یان ژیێ تە "+hour+" دەمژمێرن <br>"+
"یان ژیێ تە "+minute+" خولەکن <br>"+
"یان ژیێ تە "+second+" چرکەنە ";
}

else{
  document.getElementById('res').innerHTML="<h1>هیڤیە پێزانینێن خوو دروست پڕبکە</h1>";
}

}

//  av coden l xare taybat b average va 2 d gredayna  okkk good luck....



function a(event)
{
let x=event.which;
if(x>=48&&x<=57)
{
  return  true;
}
else {return false}
}



/* tarix */

let da;
switch (new Date().getDay()) 
{
  case 0:
    da = "ئێک شەمب";
    break;
  case 1:
    da = "دوو شەمب";
    break;
  case 2:
    da = "سێ شەمب";
    break;
  case 3:
    da = "چار شەمب";
    break;
  case 4:
    da = "پێنج شەمب";
    break;
  case 5:
    da = "هەینی";
    break;
  case  6:
    da = "شەمبی";
}
let hou=date.getHours();
let std;

switch(hou)
{
  case 1 : 
  std="دەمژمێر ئێکی نیڤ شەڤە";
  break;
  case 2:
  std="دەمژمێر دووی نیڤ شەڤە";
break;

case 3:
std="دەمژمێر سێی نیڤ شەڤە";
break;

case 4:
std="دەمژمێر چاری نیڤ شەڤە";
break;

case 5:
std="دەمژمێر پێنجی نیڤ شەڤە";
break;

case 6:
std="دەمژمێر شەشی سپێدێیە";
break;

case 7:
std="دەمژمێر حەفتی سپێدێیە";
break;

case 8:
std="دەمژمێر هەشتی سپێدێیە";
break;

case 9:
std="دەمژمێر نەهی سپێدێیە";
break;
case 10 :
std="دەمژمێر دەهی سپێدییە";
break;

case 11:
std="دەمژمێر یازدەی سپێدێیە";
break;

case 12:
std="دەمژمێڕ دوازدەی نیڤرویە";
break;

case 13:
std="دەمژمێر ئێکی نیڤرویە";
break;

case 14:
std="دەمژمێر دووی نیڤرویە";
break;

case 15:
std="دەمژمێر سێی نیڤرویە";
break;

case 16:
std="دەمژمێڕ چاری ئێڤارییە";
break;
case 17:
std=" دەمژمێر پێنجی ئێڤارییە";
break;

case 18:
std="دەمژمێر شەشی مەخرەبە";
break;

case 19:
std="دەمژمێر حەفتی شەڤە";
break;

case 20:
std="دەمژمێر هەشتی شەڤە";
break;

case 21:
std="دەمژمێر نەهی شەڤە";
break;

case 22:
std="دەمژمێر دەهی شەڤە";
break;

case 23:
std="دەمژمێر یازدەی شەڤە";
break;

case 24 :
std="دەمژمێر دوازدەی شەڤە"; 
break;

}

let ff=date.getSeconds;
document.getElementById("tarix").innerHTML="jrfgneurohguer";


