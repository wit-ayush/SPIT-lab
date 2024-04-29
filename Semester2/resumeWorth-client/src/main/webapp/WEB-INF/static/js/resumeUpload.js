function submitForm() {
    event.preventDefault();

    var fileInput = document.getElementById("resume");
    var file = fileInput.files[0];
    if (!file || file.type !== "application/pdf") {
        alert("Please select a PDF file.");
        return;
    }

    var formData = new FormData();
    formData.append("resume", file);

    fetch("https://google.com/api/uploadResume2", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Handle successful upload
            alert("Resume uploaded successfully!");
            document.getElementById("resumeForm").reset(); // Clear the form
            window.location.href = "results.jsp"; // Redirect to results.jsp
        } else {
            // Handle upload errors
            alert("Error uploading resume. Please try again later.");
        }
    })
    .catch(error => {
        // Handle network errors
        alert("Network error occurred. Please try again later.");
        console.error("Error:", error);
    });
}
