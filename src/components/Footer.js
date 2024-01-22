export default function Footer() {
    return (
        <div className="mt-16 flex flex-col items-center">
            <div className="mb-2 flex space-x-2 text-sm text-primary">
                <div>Muzallyefah Fadli</div>
                <div>{` • `}</div>
                <div>{`© ${new Date().getFullYear()}`}</div>
            </div>
            <div className="mb-8 text-sm text-primary">
                <a href="https://github.com/muzalee/react-task-management" target="__blank">
                    React Task Management
                </a>
            </div>
        </div>
    )
}  