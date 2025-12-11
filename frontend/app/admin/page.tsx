"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../../components/adminNavbar";

export default function AdminPage() {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <AdminNavbar />
            {/* Other admin page content */}
        </>
    );
}
