import { cn } from "@/lib/utils";

function Container({ children, className }) {
    return <div className={cn("relative z-10 mx-auto max-w-[1290px] px-4 lg:px-6 2xl:px-0", className)}>{children}</div>;
}

export default Container;
