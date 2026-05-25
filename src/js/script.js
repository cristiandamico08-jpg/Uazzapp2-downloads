
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
    link.href = 'https://download.oracle.com/java/25/latest/jdk-25_windows-x64_bin.exe';
    link.download = 'jdk-25_windows-x64_bin.exe';
    link.click();
});
