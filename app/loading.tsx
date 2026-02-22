import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center">
            <p className="text-xl font-semibold">
                <Spinner className=" h-16 w-16" >
                </Spinner>
            </p>
        </div>
    );
}