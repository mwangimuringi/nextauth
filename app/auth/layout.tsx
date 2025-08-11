const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            {children}
            {parent.document.title = "NextAuth"}
            <style jsx global>{`
                :root {
                    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
                }

                .from-sky-400 {
                    --tw-gradient-from: #041d3b;
                    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(4, 29, 59, 0));
                }

                .to-blue-800 {
                    --tw-gradient-to: #003057;
                }
        </div>
    );
};

export default AuthLayout;