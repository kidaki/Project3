define({ "api": [
  {
    "type": "post",
    "url": "/authenticate",
    "title": "Authenticate User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Unique access key</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"e618d316-8249-5d7a-8eac-8942f73192d7\"\n}",
          "type": "json"
        }
      ]
    },
    "name": "AuthenticateUser",
    "group": "Authenticate",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"username\": \"david\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "NoAccessKey",
            "description": "<p>Access key was not included.</p> "
          },
          {
            "group": "401",
            "optional": false,
            "field": "InvalidAccessKey",
            "description": "<p>Access key was not valid.</p> "
          },
          {
            "group": "401",
            "optional": false,
            "field": "NoUserName",
            "description": "<p>Missing username in POST.</p> "
          },
          {
            "group": "401",
            "optional": false,
            "field": "NoPassword",
            "description": "<p>Missing password in POST.</p> "
          },
          {
            "group": "401",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Invalid username and password combination.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"NoAccessKey\": \"You must have an access key\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"InvalidAccessKey\": \"You must have a valid access key\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"NoUserName\": \"You must have a valid username parameter\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"NoPassword\": \"You must have a valid password parameter\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"InvalidCredentials\": \"Invalid username:password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "C:/Dev/temp/MyProject3/src/Common/Endpoints/authenticate.php",
    "groupTitle": "Authenticate"
  },
  {
    "type": "get",
    "url": "/access",
    "title": "Request Access Key",
    "name": "GetAccess",
    "group": "Authenticate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Access Key</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"key\": \"e618d316-8249-5d7a-8eac-8942f73192d7\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "C:/Dev/temp/MyProject3/src/Common/Endpoints/access.php",
    "groupTitle": "Authenticate"
  }
] });