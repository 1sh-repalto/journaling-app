"use client"

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Tiptap from "@/components/editor/Tiptap";

export default function Editor() {
    const [title, setTitle] = useState("");

    return (
        <div className="w-full h-full">
            <div className="max-w-5xl mx-auto h-full flex flex-col">
                <input 
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" 
                    className="w-full font-bold text-3xl bg-transparent border-none focus:outline-none"
                />

                <div className="">
                    <Button
                        variant={ "outline" }
                        className="rounded-full"
                    >
                        <Plus /> Add Label
                    </Button>
                </div>

                <Tiptap />
            </div>
        </div>
    )
} 