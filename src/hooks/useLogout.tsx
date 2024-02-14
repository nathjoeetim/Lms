import { Button } from "@/components/ui/button"
import { auth_token } from "@/utils/constant"
import { LogOutIcon } from "lucide-react"
import { useRouter } from "next/navigation"


export const useLogout = () => {
    const router = useRouter()

    const handleLogOut = () => {
        localStorage.removeItem(auth_token)
        router.push('/login')
    };

    const getLogoutButton = () => {
        return <Button
            className="rounded-full"
            size="icon"
            variant="ghost"
            onClick={handleLogOut}
        >
            <LogOutIcon className="w-6 h-6" />
            <span className="sr-only">LogOut</span>
        </Button>
    }

    return {
        handleLogOut,
        getLogoutButton
    }
}