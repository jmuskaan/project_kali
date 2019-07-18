let socket = io();
socket.on('connected', () => {
    console.log("Connected " + socket.id)
})

$(function () {
    let sendbtn = $('#sendmsg')
    let sendbtn2 = $('#sendmsg2')
    let msglist = $('#msglist')
    let ip=$('#ip')
    let url=$('#url') 
    let send=$('#send')
    let ipadd=''
    sendbtn.click(function () {
       ip.show();
       
    })
    send.click(function(){
        ipadd=url.val();
        socket.emit('send_msg', {
            ipadd: ipadd
            })
    })
    sendbtn2.click(function () {
        socket.emit('send_msg2', {

        })
    })
    socket.on('recv_msg', function (data) {
        const x=JSON.stringify(data)
        const v=x.split("\\n").join("<br/>")
        msglist.html(v);
        ip.hide();
    })
})