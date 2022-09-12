import { NextResponse } from "next/server";
import cookie from 'cookie'
export default function middleware(req) {
    const cookie = req.cookies.get('token')
    // const { token } = req.cookies;
    // // console.log(req.cookies)
    // const result = cookie.parse(req ? req.headers.cookie || '' : document.cookie)
    // console.log(req.cookies)
    if(req.nextUrl.pathname === '/auth/login') {
        if(cookie) {
            return NextResponse.redirect( new URL('/home', req.url))
        }
        return console.log('ini login')
    }
    if(req.nextUrl.pathname === '/auth/register-talent') {
        if(cookie) {
            return NextResponse.redirect( new URL('/home', req.url))
        }
        return console.log('ini login')
    }
    if(req.nextUrl.pathname === '/auth/register-company') {
        if(cookie) {
            return NextResponse.redirect( new URL('/home', req.url))
        }
        return console.log('ini login')
    }
    if(req.nextUrl.pathname === '/auth/option') {
        if(cookie) {
            return NextResponse.redirect( new URL('/home', req.url))
        }
        return console.log('ini login')
    }
}