type SceneProps = {
    id: string;
    classNames?: string;
    children: React.ReactNode;
};

export default function Scene({ id, children, classNames }: SceneProps) {
    return (
        <section id={id} className={`Scene ${classNames ? classNames : ""}`}>
            {children}
        </section>
    );
}
