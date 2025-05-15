import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const hostname = req.headers.get('host') || '';
    const isLocalhost = hostname.includes('localhost');
    const mainDomain = isLocalhost ? 'localhost:3000' : 'cliref.dev';

    const subdomain = (() => {
        if (isLocalhost && hostname !== 'localhost:3000') {
            return hostname.replace('.localhost:3000', '');
        } else if (hostname.endsWith(mainDomain)) {
            return hostname.replace(`.${mainDomain}`, '');
        }
        return null;
    })();

    // Allow static assets through
    const path = req.nextUrl.pathname;
    const isStaticAsset = path.startsWith('/_next') || path.match(/\.(ico|png|jpg|js|css|svg|woff2?)$/);
    if (isStaticAsset) return NextResponse.next();

    // Redirect only if not already rewritten
    if (
        subdomain &&
        subdomain !== 'www' &&
        subdomain !== mainDomain &&
        !path.startsWith(`/${subdomain}`)
    ) {
        const protocol = req.headers.get('x-forwarded-proto') || 'http';
        const redirectUrl = `${protocol}://${mainDomain}/${subdomain}${path}`;
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next).*)'], // avoid _next/* completely
};
