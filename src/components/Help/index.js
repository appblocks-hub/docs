import React from 'react';
import Link from '@docusaurus/Link';

export default function CustomerSupport() {
    
    return (
        <div className="max-w-7xl clear-both w-full mt-10">
            <p className="text-black text-xl font-medium mb-3">Still need help?</p>
            <a href="javascript:;" className="text-primary inline-flex items-center text-base font-medium">
                <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3335 9.66658V13.9999C1.3335 14.3681 1.63198 14.6666 2.00016 14.6666H4.47635C4.84454 14.6666 5.14302 14.3681 5.14302 13.9999V10.3333C5.14302 9.96505 4.84454 9.66658 4.47636 9.66658H1.3335ZM1.3335 9.66658V7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.682 1.33325 14.6668 4.31802 14.6668 7.99992V9.66658M14.6668 9.66658V13.9999C14.6668 14.3681 14.3684 14.6666 14.0002 14.6666H11.524C11.1558 14.6666 10.8573 14.3681 10.8573 13.9999V10.3333C10.8573 9.96505 11.1558 9.66658 11.524 9.66658H14.6668Z" stroke="#5E5EDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Contact customer support</span>
            </a>
        </div>
    );
  }