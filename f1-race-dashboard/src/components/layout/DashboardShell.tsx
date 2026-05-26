'use client'

import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    return (
        <main className='dashboard-root'>
            <Sidebar />

            <div className='dashboard-content'>
                <Navbar />
                {children}
            </div>
        </main>
    )
}