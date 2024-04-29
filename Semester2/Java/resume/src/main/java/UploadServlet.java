import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
 
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

@WebServlet("/uploadResume")
@MultipartConfig
public class UploadServlet extends HttpServlet {

    private static final String API_URL = "http://localhost:3000/";
    private static final String UPLOAD_DIRECTORY = "X:\\codestuff\\Gen\\Node\\resumeanalyzer\\";
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
    	response.setContentType("text/html;charset=UTF-8");
        
        // Get the file part from request
        Part filePart = request.getPart("pdfFile");

        // Save the file to the server
        String pdfPath = UPLOAD_DIRECTORY + File.separator + "resume.pdf";
        filePart.write(pdfPath);
        
        String htmlResponse = sendPostRequest(pdfPath);
        if (htmlResponse != null) {
            // On success, send the HTML response
            response.getWriter().write(htmlResponse);
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Failed to send resume text to the server.");
        }
    }
    
    private String sendPostRequest(String pdfPath) throws IOException {
        URL url = new URL(API_URL);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "text/plain; charset=UTF-8");
        conn.setDoOutput(true);

        String jsonInputString = "{\"pdf\": \"" + pdfPath + "\"}";

        try (OutputStream os = conn.getOutputStream()) {
            byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        int responseCode = conn.getResponseCode();
        boolean success = responseCode == HttpURLConnection.HTTP_OK;
        String htmlResponse = null;

        if (success) {
            try (InputStream inputStream = conn.getInputStream();
                 BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    response.append(line);
                }
                htmlResponse = response.toString();
                System.out.println("Response from server: " + htmlResponse);
            }
        } else {
            System.out.println("Failed to send POST request. Response code: " + responseCode);
        }

        conn.disconnect();
        return htmlResponse;
    }
}
