javascript:
// http://web.archive.org/web/20130531090309/http://www.cnbeta.com/
var i;
var iUrl=document.getElementsByClassName("topic");
var iPl=document.getElementsByClassName("detail");
var box=[];
var ibox;
var re=/\d+/g;// match number
for(var i=0;i<iUrl.length;i++)
{
  var url=iUrl.item(i).innerHTML;
  var pl=iPl.item(i).innerHTML;
  var arr=pl.match(re);
  if(arr[1]>=20)
  {
    box.push(i+" "+url+"---"+"评论数："+arr[1]+"<br>"+"<br>");
    var iBox=document.getElementById("head");
    ibox=box.toString();
    ibox=ibox.replace(/,/g,"");//remove comma
    iBox.style.color="red";
    iBox.style.textAlign="left";
    iBox.style.height="100%";
    iBox.style.marginBottom="25px";
    iBox.style.fontSize="13px";
    iBox.style.lineHeight="13px";
    iBox.innerHTML=ibox
  }
};
