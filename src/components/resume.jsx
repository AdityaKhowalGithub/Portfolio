
import React, { useEffect } from 'react'
import pdfURL from '../img/ResumeMarch5.pdf';
import Navbar from './navbar';
const PDFViewer = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');

        return () => {
            document.body.classList.remove('resume-page');
        };
    }, []);
    return (

        // import navbar before iframe
        <>
            <Navbar />
            <div>
                <iframe
                    src={`${pdfURL}#toolbar=0`}
                    className="pdf"
                />
            </div>
        </>
    );
};


export default PDFViewer;