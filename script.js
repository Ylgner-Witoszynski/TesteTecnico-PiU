document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadBtnText = document.getElementById('downloadBtnText');
  const downloadLabel = document.getElementById('countdown');

  if (downloadBtn && downloadBtnText && downloadLabel) {
    const originalButtonText = downloadBtnText.textContent;
    const originalButtonColor = getComputedStyle(downloadBtn).backgroundColor;

    let countdown = 5;
    let countdownInterval;

    
    function startInitialCountdown() {
      downloadLabel.textContent = `Seu download começará em ${countdown} segundos...`;
      countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          downloadLabel.textContent = `Seu download começará em ${countdown} segundos...`;
        } else {
          clearInterval(countdownInterval);
          downloadLabel.textContent = ''; 
          handleDownloadProcess(true); 
        }
      }, 1000);
    }

    
    function handleDownloadProcess(isAutomatic) {
      if (!isAutomatic) {
        
        clearInterval(countdownInterval);
        downloadLabel.textContent = ''; 
      }
      
      downloadBtn.disabled = true;
      downloadBtnText.textContent = 'Baixando...';
      downloadBtn.style.backgroundColor = '#9CA3AF'; 

      const link = document.createElement('a');
      link.href = 'data:application/pdf;base64,JVBERi0xLjQK'; 
      link.download = 'ebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      
      setTimeout(() => {
        downloadBtnText.textContent = 'Download concluído!';
        downloadLabel.textContent = 'O download foi iniciado. Verifique sua pasta de downloads.';
        downloadLabel.style.color = '#6B7280'; 

        
        setTimeout(() => {
          downloadBtnText.textContent = 'Baixar novamente'; 
          downloadBtn.style.backgroundColor = originalButtonColor; 
          downloadBtn.disabled = false; 
          
          downloadLabel.textContent = ''; 
          downloadLabel.style.color = ''; 
          countdown = 5; 
        }, 3000); 
      }, 3000); 
    }

    
    downloadBtn.addEventListener('click', () => {
      handleDownloadProcess(false); 
    });

    
    startInitialCountdown();
  }
});