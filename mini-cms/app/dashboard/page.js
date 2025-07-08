import React from 'react'

const Page = async () => {
  // simulate slow data fetching
  await new Promise((res) => setTimeout(res, 2000))

  return <div>Hello from dashboard!</div>
}

export default Page
