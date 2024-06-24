import { Badge } from "@/components/ui/badge"
type Prop = {
    name: string,
    size: string
}
export function BadgeDemo({ name, size }: Prop) {
    return <Badge className={`w-[fit-content] ${size}`} >{name}</Badge>
}