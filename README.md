# Shopify Embedded App (w/React) POC

## Getting Started




## Useful Links

- App Bridge: https://shopify.dev/apps/tools/app-bridge
- Seesion Tokens: https://shopify.dev/apps/auth/session-tokens

## Query Parameters

Shopify calls the app by appending query paramters to each call.

Example HTTP Access Log for the initial load:

```GET /?hmac=6ebc0f248f559dc54f18dcb856dd3e859064608ea3e4bda9ca571365f5e867f4&host=d2lsbGYtc2hvcC5teXNob3BpZnkuY29tL2FkbWlu&locale=en-SG&session=72807b7ebab0e3aa4104fc06d8ee1d75f21a06c0e941ff71e41814f9a6f30a60&shop=willf-shop.myshopify.com&timestamp=1630225791```

The `host` parameter is base64 encoded of the shop name.

## Session Token

Use App Bridge to get the session token automatically.

Example session token:
```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3dpbGxmLXNob3AubXlzaG9waWZ5LmNvbS9hZG1pbiIsImRlc3QiOiJodHRwczovL3dpbGxmLXNob3AubXlzaG9waWZ5LmNvbSIsImF1ZCI6Ijg1NmM2OGRkNGQ4MmNlMDJiNTJmMGNkNWYwZjQxMzJiIiwic3ViIjoiNzY1NTQyNDAyMDAiLCJleHAiOjE2MzAyMzY3MjYsIm5iZiI6MTYzMDIzNjY2NiwiaWF0IjoxNjMwMjM2NjY2LCJqdGkiOiJlMWQyZDBmOS1hMDVkLTQ4OGQtOWFhYi0xNGQ5M2ZiNDQ4NWYiLCJzaWQiOiIwNmIwNzhlODdiMTlmMzZiOTNlZmEwMWY4MzRlYmE1ZjQ2ZTdhMjI0YmZjOTRkYzRkODA2YTIzYjAyN2U0OTA0In0.hYO6jxfmPzkImAT-AGhuwYln3TIWBULXUwwvQCx38E0```

Decoded Payload:
```{
  "iss": "https://willf-shop.myshopify.com/admin",
  "dest": "https://willf-shop.myshopify.com",
  "aud": "856c68dd4d82ce02b52f0cd5f0f4132b",
  "sub": "76554240200",
  "exp": 1630236726,
  "nbf": 1630236666,
  "iat": 1630236666,
  "jti": "e1d2d0f9-a05d-488d-9aab-14d93fb4485f",
  "sid": "06b078e87b19f36b93efa01f834eba5f46e7a224bfc94dc4d806a23b027e4904"
}
```