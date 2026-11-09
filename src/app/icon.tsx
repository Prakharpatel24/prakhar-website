
import { ImageResponse } from "next/og";

export const size = {
    width: 64,
    height: 64,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 13,
                    background: "#D76F4F",
                    color: "#1D1D1B",
                    fontSize: 29,
                    fontWeight: 800,
                    letterSpacing: "-3px",
                }}
            >
                PP
            </div>
        ),
        {
            ...size,
        }
    );
}
