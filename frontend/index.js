let socket = io();
socket.on('connected', () => {
    console.log("Connected " + socket.id)
})

$(function () {
    let sendbtn = $('#sendmsg')
    let sendbtn2 = $('#sendmsg2')
    let msglist = $('#msglist')
    sendbtn.click(function () {
        socket.emit('send_msg', {
     
        })
    })

    sendbtn2.click(function () {
        socket.emit('send_msg2', {

        })
    })
    socket.on('recv_msg', function (data) {
        const x=JSON.stringify(data)
        var formattedString = x.split("\\n").join('<br/>')  
        var p= formattedString.split("\\r")
 
        msglist.html(p);
    })
})