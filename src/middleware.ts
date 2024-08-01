import {NextRequest, NextResponse} from 'next/server'

const protectedRoutes = ["/forms"]
const unprotectedRoutes = ["/login", "/register"]

export default async function middleware(request: NextRequest) {

    if (unprotectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
        const accessToken = request.cookies.get('accessToken')?.value
        const refreshToken = request.cookies.get('refreshToken')?.value
        if (accessToken && refreshToken) {
            return NextResponse.redirect(new URL('forms', request.url))
        }
        return NextResponse.next();
    }

    if (protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
        const accessToken = request.cookies.get('accessToken')?.value
        const refreshToken = request.cookies.get('refreshToken')?.value
        if (!accessToken || !refreshToken) {
            return NextResponse.redirect(new URL('login', request.url))
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/login', '/register', '/forms'],
}