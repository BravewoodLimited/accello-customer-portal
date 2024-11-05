import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { API_BASE_URL } from 'constants/env';

const PdfViewer = ({ id='7149' }) => {
    

    return (
           <iframe
                    src={`${API_BASE_URL}/thompson-wrapper/api/v1/document/`+id}
                    style={{ width: '100%', height: '100%' }}
                    title="PDF: Loan Offer"
                    frameBorder="0"
  
                />
    );
};

export default PdfViewer;
