import {NextRequest, NextResponse} from 'next/server'

export function middleware(request: NextRequest) {
    console.log("Hello middleware")
    return NextResponse.next()
}
