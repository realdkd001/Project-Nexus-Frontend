import React from 'react'
import Link from 'next/link'
function page() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">Welcome to Nexus Polls</h1>
                <p className="text-xl mb-8 text-blue-100">
                    Share your voice and participate in real-time voting on topics that matter to you.
                </p>
                <div className="space-y-4">
                    <Link href={"/dashboard"} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition w-full">
                        Create Poll
                    </Link>
                    
                </div>
                <p className="text-blue-200 mt-12 text-sm">
                    Join thousands making their voice heard today
                </p>
            </div>
        </div>
    )
}

export default page