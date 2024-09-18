import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const authCookie = request.cookies.get("token"); // Get cookie from request

    const token = authCookie ? authCookie.value : '';
    console.log('Token in middleware:', token);

    const response = NextResponse.next();

    try {
        if(token) {
            return response;
        } else {
            return NextResponse.redirect(new URL ('/', request.url));
        }
    } catch (err) {
        console.error(err);
        return NextResponse.redirect(new URL ('/', request.url));
    }

}

export const config = {
    matcher: ["/Courses", "/Courses/:path*", "/Plans", "/Plans/:path*", "/Profile", "/Profile/:path*"]
}
