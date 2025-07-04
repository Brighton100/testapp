import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
       <Card>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
          <p className="mb-6">This is a simple React application using Tailwind CSS and custom UI components.</p>
    <Button variant="default">
          Get Started
    </Button>

    <Button variant="outline" className="ml-2">
          Learn More
    </Button>
        </div>
        
       </Card>
        </div>
  )
}

export default Home