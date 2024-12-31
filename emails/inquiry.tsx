import { CSSProperties } from "react";
import {
    Body,
    Container,
    Font,
    Head,
    Heading,
    Hr,
    Html,
    Row,
    Section,
    Text,
} from "@react-email/components";

interface Props {
    email: string;
    message: string;
    name: string;
}

export default function InquiryEmail(props: Readonly<Props>) {
    return (
        <Html>
            <Head>
                <Font
                    fallbackFontFamily="Verdana"
                    fontFamily="JetBrains Mono"
                    fontStyle="normal"
                    fontWeight={400}
                    webFont={{
                        format: "woff2",
                        url: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
                    }}
                />
            </Head>
            <Body style={body}>
                <Container>
                    <Heading style={heading}>Nová poptávka z webu</Heading>
                    <Section style={section}>
                        <Row>
                            <Text style={rowHeading}>Jméno:</Text>
                            <Text style={rowText}>{props.name}</Text>
                        </Row>
                        <Hr style={hr} />
                        <Row>
                            <Text style={rowHeading}>E-mail:</Text>
                            <Text style={rowText}>{props.email}</Text>
                        </Row>
                        <Hr style={hr} />
                        <Row>
                            <Text style={rowHeading}>Zpráva:</Text>
                            <Text style={rowText}>{props.message}</Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const body: CSSProperties = {
    backgroundColor: "#011627",
    color: "#607b96",
};

const heading: CSSProperties = {
    fontSize: "26px",
    textAlign: "center",
};

const section: CSSProperties = {
    backgroundColor: "#011221",
    border: "1px solid #1e2d3d",
    borderRadius: "8px",
    padding: "16px",
};

const hr: CSSProperties = {
    borderColor: "#1e2d3d",
};

const rowHeading: CSSProperties = {
    color: "white",
};

const rowText: CSSProperties = {
    color: "#607b96",
};
