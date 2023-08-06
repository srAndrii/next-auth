import Image from "next/image";

type User =
    | {
          name?: string | null | undefined;
          email?: string | null | undefined;
          image?: string | null | undefined;
      }
    | undefined;

type Props = {
    user: User;
    pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
    return (
        <section className="flex flex-col gap-4">
            <p className="text-2xl text-center">{pagetype} Page!</p>
        </section>
    );
}
