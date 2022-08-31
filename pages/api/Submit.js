import {google} from "googleapis";
 // import { useRouter } from "next/router";
// import { resetWarningCache } from "prop-types";
 
// const router = useRouter()

async function handler (req, res ) {
    if (req.method !== 'POST') {
        return res.status(405).json({response, result: "Only POST requests allowed"})
    }

    const body = req.body

    try {

        const spreadsheetId = "1dYfC-ie6pawyGtpv9mYhd1-mSKvCWx7BrFoYWtUXW8U"

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
              },
            scopes: "https://www.googleapis.com/auth/spreadsheets",
          });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: 'Sheet1!B:I',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.chosenVideo, body.word1, body.word2, body.word3, body.word4, body.word5, body.textBefore, body.textAfter]
                ]
            }
        });

        return res.status(201).json({
            data: response.data,

        })
    }catch (e) {
        return res.status(e.code).send({message: e.message})

    }
    

}

export default handler;