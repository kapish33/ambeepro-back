# Ambee -backend

Ambee

POST

Post a Entity

{{testurl}}/api/v1/table

**BODY**raw

```javascript
{
     "user": "initial",
    "name": "shiva",
    "changes": 25
}
```

Example Request

Post a Entity

```javascript
curl --location -g --request POST '{{testurl}}/api/v1/table' \
--data-raw '{
     "user": "initial",
    "name": "shiva",
    "changes": 25
}'
```

GET

Paginated Table

{{testurl}}/api/v1/table?page=1&limit=25

PARAMS

page

1

limit

25

Example Request

Paginated Table

```javascript
curl --location -g --request GET '{{testurl}}/api/v1/table?page=1&limit=25'
```

PATCH

Patch As Per Entity Id

{{testurl}}/api/v1/table?id=6325719077c2993d457430d0

PARAMS

id

6325719077c2993d457430d0

**BODY**raw

```javascript
{
    "user": "initial",
    "name": "shiva",
    "changes": 25
}
```

Example Request

Patch As Per Entity Id

```javascript
curl --location -g --request PATCH '{{testurl}}/api/v1/table?id=6325719077c2993d457430d0' \
--data-raw '{
    "user": "initial",
    "name": "shiva",
    "changes": 25
}'
```

GET

Test URL

{{testurl}}

Example Request

Test URL

```javascript
curl --location -g --request GET '{{testurl}}'
```