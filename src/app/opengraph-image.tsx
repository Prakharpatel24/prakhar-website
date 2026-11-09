
import { ImageResponse } from "next/og";

export const alt = "Prakhar Patel — I build systems. I connect people.";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "68px 80px",
                    background: "#F4F0E8",
                    color: "#1D1D1B",
                }}
            >
                {/* Top bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <span
                        style={{
                            fontSize: 30,
                            fontWeight: 800,
                            letterSpacing: "-2px",
                        }}
                    >
                        PP®
                    </span>

                    <span
                        style={{
                            fontSize: 16,
                            letterSpacing: "2px",
                            color: "#777067",
                        }}
                    >
                        ENGINEERING / IDEAS / PEOPLE
                    </span>
                </div>

                {/* Main headline */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            fontSize: 95,
                            fontWeight: 700,
                            letterSpacing: "-5px",
                            lineHeight: 1.15,
                        }}
                    >
                        Prakhar Patel.
                    </div>

                    <div
                        style={{
                            marginTop: 20,
                            fontSize: 53,
                            fontWeight: 500,
                            letterSpacing: "-2px",
                        }}
                    >
                        I build systems.
                    </div>

                    <div
                        style={{
                            fontSize: 66,
                            fontFamily: "Georgia, serif",
                            fontStyle: "italic",
                            color: "#D76F4F",
                            letterSpacing: "-2px",
                        }}
                    >
                        I connect people.
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 24,
                        borderTop: "1px solid #D9D1C5",
                    }}
                >
                    <span
                        style={{
                            color: "#777067",
                            fontSize: 17,
                            letterSpacing: "1px",
                        }}
                    >
                        SOFTWARE ENGINEER. CURIOUS HUMAN.
                    </span>

                    <span
                        style={{
                            color: "#D76F4F",
                            fontSize: 38,
                        }}
                    >
                        ✳
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
