import { NextRequest, NextResponse } from 'next/server'

const RESERVED = ['www', 'localhost']

export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || ''
    const url = req.nextUrl.clone()

    const subdomain = host.split('.')[0]
    const isReserved = RESERVED.includes(subdomain)

    const shouldRewrite = !isReserved && subdomain && host.endsWith('.cliref.dev')

    if (shouldRewrite) {
        url.pathname = `/${subdomain}${url.pathname}`
        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}
