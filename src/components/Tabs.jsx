import { Fragment } from "react";

// Default prop container is menu, using the = operator
export default function Tabs({children, buttons, container = 'menu'}){
    // remap container prop to a valid variable with UPPERCASE name
    const Container = container;
    return (
        <Fragment>
            <Container>{buttons}</Container>
            {children}
        </Fragment>
    );
}