import { NextResponse } from "next/server";
import Vibrant from "node-vibrant";
import sharp from "sharp";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Utilisez sharp pour charger et redimensionner l'image
    const resizedBuffer = await sharp(buffer).resize(200, 200).toBuffer();

    // Utilisez node-vibrant sur le buffer redimensionné
    const palette = await Vibrant.from(resizedBuffer).getPalette();

    const colors = {
      vibrant: palette.Vibrant.hex,
      darkVibrant: palette.DarkVibrant.hex,
      lightVibrant: palette.LightVibrant.hex,
      muted: palette.Muted.hex,
      darkMuted: palette.DarkMuted.hex,
      lightMuted: palette.LightMuted.hex,
    };

    return NextResponse.json({ colors });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process file upload", details: error.message },
      { status: 500 }
    );
  }
}
