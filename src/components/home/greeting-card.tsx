import { currentUser } from "@clerk/nextjs/server";
import { Button } from "../ui/button";

export default async function GreetingCard() {
    const user = await currentUser()
    const firstName = user?.firstName || "User"
    
    return (
        <div className="w-full min-h-[30vh] flex flex-col justify-center items-center gap-3">
            <h1 className="text-2xl md:text-4xl font-bold">Welcome, { firstName }!</h1>
            <div className="flex flex-col md:flex-row gap-3">
                <Button variant="outline" className="cursor-pointer">
                    Write
                </Button>
                <Button variant="outline" className="cursor-pointer">
                    Read
                </Button>
            </div>
      </div>
    )
}