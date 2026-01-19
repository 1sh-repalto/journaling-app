"use client"

import { ThemeToggle } from "./mode-toggle";
import { SidebarActionTrigger } from "./sidebar-trigger-button";
import UserAccountButton from "./user-account-button";

export function ProtectedHeader() {
    return (
        <div className="py-2 px-4 flex justify-between items-center">
          <SidebarActionTrigger />
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <div className="flex justify-center w-8">
              <UserAccountButton />
            </div>
          </div>
        </div>
    );
}