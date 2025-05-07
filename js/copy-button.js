function copyToClipboard() {
    const filepath = "/{{ .Get "filepath" }}";
    
    fetch(filepath)
      .then(response => response.text())
      .then(text => {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = text;
        document.body.appendChild(tempTextArea);
        
        tempTextArea.select();
        document.execCommand("copy");
        
        document.body.removeChild(tempTextArea);
        
        alert("Código copiado para a área de transferência!");
      })
      .catch(err => alert("Erro ao copiar o conteúdo: " + err));
  }
  