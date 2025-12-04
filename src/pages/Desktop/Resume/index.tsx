import { FC, useState } from "react";
import { pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker?url';
import { Document, Page } from 'react-pdf';

import resume from '../../../assets/pdf/MyResume.pdf';
// import { pdfjs } from 'react-pdf';
// import workerSrc from 'pdfjs-dist/build/pdf.worker?url';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume: FC = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }

    return (
    //   <div>
    //     <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
    //       <Page pageNumber={pageNumber} />
    //     </Document>
    //     <p>
    //       Page {pageNumber} of {numPages}
    //     </p>
    //   </div>
    <div className="relative w-full h-full flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">My Resume</h1>

      {/* Download button */}
      <a
        href={resume}
        download
        className="mb-6 px-6 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
      >
        Download Resume
      </a>

      {/* PDF Viewer */}
      <div className="flex flex-col gap-4 *:w-full max-w-fit bg-white shadow-lg rounded-xl border-amber-300 h-fit p-4">
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (_el, index) => (
            <div className="shadow-md rounded-md border-amber-300 mb-4 border-2">
              <Page 
            key={`page_${index + 1}`} 
            pageNumber={index + 1} 
            renderTextLayer={false} 
            renderAnnotationLayer={false} 
            className='p-2'
          />
            </div>
          ))}
        </Document>
      </div>
    </div>
    );
};
