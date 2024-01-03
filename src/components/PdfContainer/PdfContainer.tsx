import { Document, Page } from "react-pdf";

const PdfContainer = () => {
  return (
    <div className="document-container">
      <Document file="/CV.pdf">
        <Page width={450} pageNumber={1} className={"document-container"} renderAnnotationLayer={false} renderTextLayer={false}/>
      </Document>
    </div>
  );
};

export default PdfContainer;
