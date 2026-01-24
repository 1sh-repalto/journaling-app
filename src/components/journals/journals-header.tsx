import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function JournalsPageHeader() {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold">Your Journals</h1>
            <Button variant={ "outline" } className="cursor-pointer">
                <Plus />
                Create Journal
            </Button>
        </div>
    )
}