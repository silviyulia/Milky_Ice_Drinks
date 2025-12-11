"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  return (  
      
      <footer className="bg-pink-600 text-white py-6 text-center mt-10">
        <p className="font-medium">Milky Ice Drinks © 2025</p>
        <p className="text-sm text-pink-200 mt-1">Fresh & sweet everyday 💗</p>
        <p className="text-sm text-pink-200 mt-1"> by silvi yulia</p>
      </footer>
    );  
}