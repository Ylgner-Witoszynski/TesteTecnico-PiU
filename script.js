document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadBtnText = document.getElementById('downloadBtnText');
  const downloadLabel = document.getElementById('countdown');

  if (downloadBtn && downloadBtnText && downloadLabel) {
    const originalButtonText = downloadBtnText.textContent;
    const originalButtonColor = getComputedStyle(downloadBtn).backgroundColor;

    let countdown = 5;
    let countdownInterval;

    // Function to start the initial countdown
    function startInitialCountdown() {
      downloadLabel.textContent = `Seu download começará em ${countdown} segundos...`;
      countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          downloadLabel.textContent = `Seu download começará em ${countdown} segundos...`;
        } else {
          clearInterval(countdownInterval);
          downloadLabel.textContent = ''; // Clear label when auto-download process starts
          handleDownloadProcess(true); // true indicates automatic download
        }
      }, 1000);
    }

    // Main download process handler
    function handleDownloadProcess(isAutomatic) {
      if (!isAutomatic) {
        // Clear any existing countdown if user clicks manually
        clearInterval(countdownInterval);
        downloadLabel.textContent = ''; // Clear label when manual click starts process
      }
      
      downloadBtn.disabled = true;
      downloadBtnText.textContent = 'Baixando...';
      downloadBtn.style.backgroundColor = '#9CA3AF'; // Gray color as requested

      // Simulate PDF download (this part was in the original script.js)
      const link = document.createElement('a');
      link.href = 'data:application/pdf;base64,JVBERi0xLjQK'; // Example base64 PDF
      link.download = 'ebook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // State: Download concluded
      setTimeout(() => {
        downloadBtnText.textContent = 'Download concluído!';
        downloadLabel.textContent = 'O download foi iniciado. Verifique sua pasta de downloads.';
        downloadLabel.style.color = '#6B7280'; // Set color for this specific message

        // State: Ready for new download
        setTimeout(() => {
          downloadBtnText.textContent = 'Baixar novamente'; // Change to "Baixar novamente"
          downloadBtn.style.backgroundColor = originalButtonColor; // Restore original color
          downloadBtn.disabled = false; // Re-enable the button
          
          downloadLabel.textContent = ''; // Clear label, as nothing should be underneath
          downloadLabel.style.color = ''; // Reset color
          countdown = 5; // Reset countdown for future automatic downloads
        }, 3000); // Display "Download concluído!" for 3 seconds
      }, 3000); // Display "Baixando..." for 3 seconds
    }

    // Event listener for manual click
    downloadBtn.addEventListener('click', () => {
      handleDownloadProcess(false); // false indicates manual click
    });

    // Start the initial countdown when the page loads
    startInitialCountdown();
  }
});