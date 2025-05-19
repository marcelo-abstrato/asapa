"use client";

import {useState} from "react";
import {ChevronLeft, ChevronRight, FileText, ZoomIn, ZoomOut} from "lucide-react";
import {Button} from "./button";
import {Modal} from "./modal";
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for PDF.js
// Using CDN approach to avoid file system issues
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

/**
 * PDFViewer Component
 *
 * A component for viewing PDF documents using react-pdf library.
 * Features:
 * - Page navigation (previous/next)
 * - Zoom controls
 * - Loading state indication
 * - Error handling
 * - Fixed width of 800px for better readability
 *
 * Note: This component uses a CDN approach to load the PDF.js worker,
 * which avoids file system issues and ensures that the worker is loaded correctly
 * regardless of the local file structure. This is a more reliable approach for
 * loading the PDF.js worker in Next.js applications.
 *
 * @example
 * ```tsx
 * <PDFViewer
 *   filePath="/path/to/document.pdf"
 *   buttonText="View Document"
 *   buttonVariant="outline"
 * />
 * ```
 */
interface PDFViewerProps {
    filePath: string;
    buttonText?: string;
    buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    buttonSize?: "default" | "sm" | "lg" | "icon";
    buttonClassName?: string;
}

export function PDFViewer({
                              filePath,
                              buttonText = "Visualizar",
                              buttonVariant = "ghost",
                              buttonSize = "sm",
                              buttonClassName = "text-[#1d4ed8]"
                          }: PDFViewerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const openPDF = () => setIsOpen(true);
    const closePDF = () => {
        setIsOpen(false);
        // Reset state when closing
        setPageNumber(1);
        setScale(1.0);
        setIsLoading(true);
        setError(null);
    };

    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages);
        setIsLoading(false);
    };

    const onDocumentLoadError = (error: Error) => {
        setError(error);
        setIsLoading(false);
    };

    const goToPrevPage = () => {
        setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1));
    };

    const zoomIn = () => {
        setScale(prevScale => Math.min(prevScale + 0.2, 3.0));
    };

    const zoomOut = () => {
        setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
    };

    return (
        <>
            <Button
                variant={buttonVariant}
                size={buttonSize}
                className={buttonClassName}
                onClick={openPDF}
            >
                <FileText className="h-4 w-4 mr-2"/>
                {buttonText}
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={closePDF}
                title="Visualizador de Documento"
                autoCloseTimeout={0} // Disable auto-close
            >
                <div className="w-[800px] max-w-full h-[70vh] mt-4 flex flex-col mx-auto">
                    {isLoading && (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1d4ed8]"></div>
                        </div>
                    )}

                    {error && (
                        <div className="flex items-center justify-center h-full text-red-500">
                            <p>Erro ao carregar o documento: {error.message}</p>
                        </div>
                    )}

                    <div className="flex-1 overflow-auto border rounded">
                        <Document
                            file={filePath}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={null} // We handle loading state ourselves
                            className="flex justify-center"
                        >
                            <Page
                                pageNumber={pageNumber}
                                scale={scale}
                                renderTextLayer={true}
                                renderAnnotationLayer={true}
                                className="page"
                            />
                        </Document>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={goToPrevPage}
                                disabled={pageNumber <= 1}
                            >
                                <ChevronLeft className="h-4 w-4"/>
                            </Button>

                            <span className="text-sm">
                Página {pageNumber} de {numPages || '?'}
              </span>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={goToNextPage}
                                disabled={pageNumber >= (numPages || 1)}
                            >
                                <ChevronRight className="h-4 w-4"/>
                            </Button>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={zoomOut}>
                                <ZoomOut className="h-4 w-4"/>
                            </Button>

                            <span className="text-sm">{Math.round(scale * 100)}%</span>

                            <Button variant="outline" size="sm" onClick={zoomIn}>
                                <ZoomIn className="h-4 w-4"/>
                            </Button>
                        </div>

                        <Button onClick={closePDF} variant="outline">
                            Fechar
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
