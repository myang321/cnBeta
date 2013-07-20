javascript:

    var i;
    var iInfo=document.getElementsByClassName("newsinfo");
    var iTitle=document.getElementsByTagName("dt");
    var box=[];
    var n_info=iInfo.length;
    var n_title=iTitle.length;
    var re=/\d+/g;
    for(var i=0;i<n_info;i++)
    {
        var info=iInfo.item(i).innerHTML;
        var title=iTitle.item(i+35).innerHTML;
        var iclick=iInfo.item(i).getElementsByClassName("click");
        var icomments=iInfo.item(i).getElementsByClassName("comments");
        var iscore=iInfo.item(i).getElementsByClassName("score");
        var num_click=iclick[0].innerHTML.match(re);
        var num_comments=icomments[0].innerHTML.match(re);
        var num_score=iscore[0].innerHTML;
        if(num_click>=5000 || num_comments>=20)
        {
          box.push((i+1)+" "+title+" click: "+num_click+" comments: "+num_comments+"<br>")
        }
    };
    box=(box.toString()).replace(/,/g,"");
    document.write(box);