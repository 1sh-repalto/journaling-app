"use client"

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Tiptap from "@/components/editor/Tiptap";

export default function Editor() {
    const [title, setTitle] = useState("");

    return (
        <div className="w-full">
            <div className="max-w-5xl mx-auto">
                <input 
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" 
                    className="w-full font-bold text-3xl bg-transparent border-none focus:outline-none"
                />

                <div className="mt-5">
                    <Button
                        variant={ "outline" }
                        className="rounded-full"
                    >
                        <Plus /> Add Label
                    </Button>
                </div>

                <div className="mt-5">
                    <Tiptap />
                </div>
            </div>
        </div>
    )
} 