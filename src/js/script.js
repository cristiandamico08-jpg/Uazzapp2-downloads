
document.getElementById('downloadWindows').addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = 'https://github.com/simonenapolitano/AppMessaggi/releases/download/1.0/Uazzapp.2.jar';
    link.download = 'setupBlackJack.exe';
    link.click();
});

document.getElementById('downloadChatServer').addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.href = 'https://github.com/simonenapolitano/AppMessaggi/releases/download/1.0/ChatServer.zip';
    link.download = 'setupBlackJack.exe';
    link.click();
});

document.getElementById('downloadJavaWindows').addEventListener('click', ()=>{
    const link = document.createElement('a');
    link.setAttribute("target", "_blank");
    link.href = 'https://www.oracle.com/it/java/technologies/downloads/#jdk26-windows';
    link.click();
});
