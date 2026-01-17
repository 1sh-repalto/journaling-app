import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function LandingPage() {
  const { userId } = await auth()
  
  if (userId) {
    redirect('/home')
  }

  return (
    <main className="min-h-screen">
      Landing Page

      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </main>
  )
}