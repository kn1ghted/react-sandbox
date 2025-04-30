// Pass title and children as props to the Section component
// Additional props are passed to the section element
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}