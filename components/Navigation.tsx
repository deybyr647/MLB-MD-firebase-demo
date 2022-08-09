import Link from "next/link";
import { Nav, Navbar, Image } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar
            bg={"spaceCadet"}
            expand={"lg"}
            className={"w-100 mb-3 sticky-top px-3"}
        >
            <Navbar.Brand>
                <Image alt={"logo"} width={50} src={"/images/obito-ms.jpeg"} className={"rounded-circle"}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={"navigation-nav"} />
            <Navbar.Collapse id={"navigation-nav"}>
                <Nav className={"ms-auto text-center"}>
                    <Nav.Link
                        href={"https://github.com/deybyr647/MLB-MD-firebase-demo"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={`text-ghostWhite`}
                    >
                        GitHub
                    </Nav.Link>

                    <Nav.Link
                        href={"/api/hello"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={`text-ghostWhite`}
                    >
                        API
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;