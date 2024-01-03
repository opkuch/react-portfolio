import { Document, Page } from 'react-pdf'
import useScreenSize from '../../hooks/useScreenSize'
import Button from '../Button/Button'

const PdfContainer = () => {
  const { width } = useScreenSize()
  return (
    <div className="pdf-page">
      <div className="document-container">
        <Document file="/CV.pdf">
          <Page
            width={450}
            pageNumber={1}
            className={'document-container'}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={
              width > 1600
                ? width / 1450
                : width > 1000
                ? width / 1300
                : width / 750
            }
          />
        </Document>
        <Button>
          <a
            className="download-pdf"
            href="/CV.pdf"
            download
            onClick={(e) => e.stopPropagation()}
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  )
}

export default PdfContainer
