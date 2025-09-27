import { FC, useState } from "react";
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

import resume from '../../../assets/pdf/rnd.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume: FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }
  
    return (
      <div>
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
};
