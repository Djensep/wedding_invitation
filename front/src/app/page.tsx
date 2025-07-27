import { Input } from "@/shared/ui/Input/Input";

export default function Home() {
    return (
        <div>
            <Input type="range" range={{ min: 10, max: 30 }} name={""} />
        </div>
    );
}
