ShellApplication
.manifest({
  name: 'editor'
})
.open('text/plain','Plain text file','string',function(msg,reply){
  $('#editor').val(msg.content)
  reply(null);
})
.connect();
