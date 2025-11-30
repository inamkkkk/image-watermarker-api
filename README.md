# Image Watermarker API

This is a simple Node.js API that allows you to add a watermark to an image.

## Installation

1.  Clone the repository.
2.  Run `npm install`.
3.  Configure the environment variables in `.env`.
4.  Run `npm start`.

## Usage

**Endpoint:** `/api/watermark`

**Method:** POST

**Body:**


{
  "image": "<base64 encoded image>",
  "text": "<watermark text>",
  "options": {
    "position": "bottom-right",
    "font": "Arial",
    "fontSize": 32,
    "color": "#FFFFFF"
  }
}


**Response:**


{
  "success": true,
  "watermarkedImage": "<base64 encoded watermarked image>"
}


## Environment Variables

*   `PORT`: The port the server will listen on (default: 3000)
*   `JWT_SECRET`: Secret key for JWT authentication.
