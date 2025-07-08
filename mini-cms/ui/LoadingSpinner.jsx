import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-blue-600" />
    </div>
  )
}

export default LoadingSpinner