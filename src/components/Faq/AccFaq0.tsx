'use client';

import React from 'react'

const AccFaq0 = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="px-5 md:px-10 lg:px-6 py-8 rounded-3xl bg-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-around items-end w-full px-5 md:px-10 lg:px-6 py-8 rounded-xl'
            >
                <span className="text-indigo-50 dark:text-indigo-50 text-3xl font-bold">Can your AI tools accurately identify WCAG 2.2 compliance issues?</span>
                {isOpen ? <svg className="w-6 h-6 text-indigo-50 dark:text-indigo-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17-4-4-4 4m8-6-4-4-4 4" />
                </svg> : <svg className="w-6 h-6 text-indigo-50 dark:text-indigo-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 7 4 4 4-4m-8 6 4 4 4-4" />
                </svg>
                }
            </button>
            <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-indigo-50 text-lg ${isOpen
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden text-xl px-24">
                    Our AI tools are trained on the WCAG 2.2 guidelines and are invaluable in flagging potential accessibility barriers. This allows us to efficiently focus our manual review on complex issues and nuances to ensure comprehensive compliance.
                </div>
            </div>
        </div>
    )
}

export default AccFaq0