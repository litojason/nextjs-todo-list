"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";
import { logout } from "@/actions/user";

export default function LogoutDialog() {
  const [open, onOpenChange] = useState(false);
  const { state } = useSidebar();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-destructive hover:text-destructive"
          onClick={() => onOpenChange(true)}
        >
          <LogOut />
          {state === "expanded" && "Log out"}
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Log Out?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to log out?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction>Cancel</AlertDialogAction>

          <Button
            variant="outline"
            onClick={logout}
            className="border-destructive hover:bg-destructive/90 text-destructive hover:text-primary-foreground"
          >
            Log Out
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
