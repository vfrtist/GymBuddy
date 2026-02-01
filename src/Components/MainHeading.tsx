import "../Stylings/MainHeading.css";

interface MainHeadingProps {
    heading: string;
    superheading?: string;
    subheading?: string;
    classes?: string;
    children?: React.ReactNode;
}

export default function MainHeading({
    heading,
    superheading,
    subheading,
    classes,
    children,
}: MainHeadingProps) {
    return (
        <div id="MainHeading" className={`container ${classes}`}>
            {superheading && <h3 className="superheading">{superheading}</h3>}
            {heading && <h1 className="main">{heading}</h1>}
            {subheading && <h2 className="subheading">{subheading}</h2>}
            {children}
        </div>
    );
}
