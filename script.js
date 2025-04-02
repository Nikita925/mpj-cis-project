let fileUploaded = false;

// Handle dragover event (changing background color when dragging file over the upload box)
document.getElementById('upload-box').addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('upload-box').style.backgroundColor = '#d6e9ff';  // Light blue on hover
});

// Handle dragleave event (reset background color when drag leaves the upload box)
document.getElementById('upload-box').addEventListener('dragleave', () => {
    document.getElementById('upload-box').style.backgroundColor = '#ecf0f1';  // Reset to light grey
});

// Handle drop event (file dropped in the upload box)
document.getElementById('upload-box').addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
});

// Handle file upload for both drag-and-drop and file browser input
document.getElementById('file-upload').addEventListener('change', (e) => {
    handleFileUpload(e.target.files);
});

// Function to handle file upload and show the scan button
function handleFileUpload(files) {
    if (files.length > 0) {
        fileUploaded = true;
        document.getElementById('scan-btn').style.display = 'inline-block'; // Show scan button
        document.getElementById('upload-box').style.backgroundColor = '#ecf0f1'; // Reset color after file is added
    }
}

// Function to start scanning (simulate scanning for 3 seconds)
function startScanning() {
    if (fileUploaded) {
        document.getElementById('scanning-msg').style.display = 'block';
        document.getElementById('scan-btn').style.display = 'none'; // Hide scan button

        setTimeout(() => {
            document.getElementById('scanning-msg').style.display = 'none';
            document.getElementById('view-results-btn').style.display = 'inline-block'; // Show results button
        }, 3000);  // Simulate scanning for 3 seconds
    }
}

// Function to simulate viewing scan results
function viewScanResults() {
    alert("Displaying scan results... (Placeholder for backend integration)");
}
