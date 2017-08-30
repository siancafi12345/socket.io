
var socket = io.connect('http://172.21.20.142:6677', { 'forceNew': true });

socket.on('messages', function (data) {

    console.log(data);
    render(data);
});

function render(data) {
    var html = data.map(function (messages, index) {
        return (`
    <div class="message">
            <strong>${messages.nickname}</strong> dice:
            <p>${messages.text}</p>
        </div>
    `);
    }).join('   ');
    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}


function addMessage(e) {
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    socket.emit('add-message', message)
    return false;
}