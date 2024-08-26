import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Thuyrx.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">ThuTuyz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">thynamite408@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Thuyrx.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">ThuTuyz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">thynamite408@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Thuyrx.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">ThuTuyz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">thynamite408@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8" >
                        <AvatarImage src="https://github.com/Thuyrx.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">ThuTuyz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">thynamite408@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}