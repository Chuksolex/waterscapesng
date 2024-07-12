// components/PdfPagination.js
import { useState, useRef } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Import pdfjs-dist and set the workerSrc
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

const workerSrcUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.1.81/pdf.worker.min.js';
GlobalWorkerOptions.workerSrc = workerSrcUrl;

const PdfPagination = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const viewerRef = useRef(null);

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        onDocumentLoad: (e) => {
            setTotalPages(e.numPages);
        }
    });

    const onDocumentLoadSuccess = ({ numPages }) => {
        setTotalPages(numPages);
    };

    const jumpToPage = (pageNumber) => {
        const viewer = viewerRef.current;
        if (viewer) {
            viewer.scrollPageIntoView({ pageNumber });
            setCurrentPage(pageNumber - 1);
        }
    };

    return (
        <div>
            <h2 className='text-center'>View or Download Brochure</h2>
            <div style={{ height: '750px' }}>
                <Worker workerUrl={workerSrcUrl}>
                    <Viewer
                        fileUrl="/assets/documents/waterscapesbrochure.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                        onDocumentLoadSuccess={onDocumentLoadSuccess}
                        ref={viewerRef}
                    />
                </Worker>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button
                    disabled={currentPage <= 0}
                    onClick={() => jumpToPage(currentPage)}
                >
                    Previous
                </button>
                <span style={{ margin: '0 10px' }}>
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button
                    disabled={currentPage >= totalPages - 1}
                    onClick={() => jumpToPage(currentPage + 2)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PdfPagination;
