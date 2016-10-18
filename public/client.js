ShellApplication
.manifest({
  name: 'editor'
})
.open('text/plain','Plain text file','string',function(msg,reply){
  $('#editor').val(msg.content)
  reply(null);
})
.save('text/plain','Plain text file','string',function(msg,reply){
  reply(null,$('#editor').val());
})
.new('text/plain','Plain text file',function(msg,reply){
  $('#editor').val('')
  reply(null);
})
.connect();