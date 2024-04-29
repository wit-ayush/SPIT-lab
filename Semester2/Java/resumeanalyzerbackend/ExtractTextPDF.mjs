import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";


async function ExtractTextPDF() {
  const pdfPath = "X:/codestuff/Gen/Node/resumeanalyzer/resume.pdf";
  const loadingTask = getDocument(pdfPath);
  const doc = await loadingTask.promise;
  const numPages = doc.numPages;
  let allText = ""; // Store all extracted text (optional)

  const loadPage = async function (pageNum) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const strings = content.items.map(function (item) {
      return item.str;
    }).join(" ");
    // Release page resources.
    page.cleanup();
    return strings;
  };

  // Loading of pages sequentially, accumulate text content for all pages
  for (let i = 1; i <= numPages; i++) {
    const pageText = await loadPage(i);
    allText += pageText + "\n\n"; // Add newlines between pages (optional)
  }

  return allText;
}

export default ExtractTextPDF;

