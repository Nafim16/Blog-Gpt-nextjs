import { faKeyboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Logo = () => {
    return (
        <div className="text-3xl text-center py-4 font-semibold">
            <FontAwesomeIcon icon={faKeyboard} className="text-3xl text-slate-400" />
            Blog GPT
        </div>
    )
}