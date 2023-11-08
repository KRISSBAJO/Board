

import React, { useRef, useEffect, useState } from 'react';

const PDFViewer = ({ file }) => {
  const canvasRef = useRef(null);
  const [pdfjs, setPdfjs] = useState(null);

  useEffect(() => {
    import('pdfjs-dist/build/pdf').then(pdf => {
      import('pdfjs-dist/build/pdf.worker.entry').then(pdfWorker => {
        pdf.workerSrc = pdfWorker;
        setPdfjs(pdf);

        const loadingTask = pdf.getDocument(file);
        loadingTask.promise.then(pdfDocument => {
          console.log('PDF loaded');
      // Fetches the first page
      const pageNumber = 1;
      pdf.getPage(pageNumber).then(page => {
        console.log('Page loaded');
        
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions.
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context.
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
          console.log('Page rendered');
        });
      });
    }, reason => {
        console.error(reason);
      });
    });
  });
}, [file]);

return <canvas ref={canvasRef} className="w-full" />;
};

export default PDFViewer;