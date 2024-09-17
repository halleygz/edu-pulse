import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const authCookie = request.cookies.getAll(); // Get cookie from request
    console.log('Auth Cookie:', authCookie);

    const token = authCookie ? authCookie : 'notoken';
    console.log('Token in middleware:', token);

    const response = NextResponse.next();

    // If you need to modify the response, like setting a cookie
    if (authCookie) {
        // response.cookies.set("app-user", authCookie, { httpOnly: true });
    }

    return response;
}

export const config = {
    matcher: ["/Courses", "/Courses/:path*"]
}
